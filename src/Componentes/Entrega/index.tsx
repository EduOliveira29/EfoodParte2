import { useFormik } from 'formik'
import { Container, SideBar, Titulo, Botoes, CepENumero } from './styles'
import * as Yup from 'yup'
import { Botão, BotãoLink } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/form'

const Entrega = () => {
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      receiver: '',
      CEP: '',
      numero: 0,
      endereco: '',
      cidade: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(8, 'O nome deve apresentar pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      CEP: Yup.string()
        .min(8, 'o campo deve ter 8 digitos')
        .max(8, 'o campo deve ter 8 digitos')
        .required('O campo é obrigatório'),
      numero: Yup.string()
        .min(1, 'o campo deve conter o número para entrega')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(8, 'o campo deve estar preencido')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(4, 'o campo deve estar preencido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      adicionar({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: '',
            number: values.numero
          }
        }
      })
    }
  })

  const irParaPagamento = () => {
    if (form.isValid) {
      navigate('/Pagamento')
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <>
      <Container>
        <SideBar>
          <form onSubmit={form.handleSubmit}>
            <Titulo>Entrega</Titulo>
            <div>
              <div>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('receiver', form.errors.receiver)}
                </small>
              </div>
              <div>
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <CepENumero>
                <div>
                  <label htmlFor="CEP">CEP</label>
                  <input
                    id="CEP"
                    type="text"
                    name="CEP"
                    value={form.values.CEP}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('numero', form.errors.numero)}</small>
                </div>
              </CepENumero>
              <div>
                <label htmlFor="">Complemento (opcional)</label>
                <input type="text" />
              </div>
            </div>
            <Botoes>
              <Botão type="submit" onClick={irParaPagamento}>
                Continuar com a entrega
              </Botão>
              <BotãoLink type="link" to={`/`}>
                Voltar para o carrinho
              </BotãoLink>
            </Botoes>
          </form>
        </SideBar>
      </Container>
    </>
  )
}

export default Entrega
