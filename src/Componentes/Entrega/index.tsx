import { useFormik } from 'formik'
import { Container, SideBar, Titulo, Botoes, CepENumero } from './styles'
import * as Yup from 'yup'
import { Botão, BotãoLink } from '../../styles'
import { useComprarMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const Entrega = () => {
  const [comprar] = useComprarMutation()
  const navigate = useNavigate()

  const formEntrega = useFormik({
    initialValues: {
      nomeCompleto: '',
      CEP: '',
      numero: 0,
      endereco: '',
      cidade: ''
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
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
      comprar({
        entrega: {
          nomeCompleto: values.nomeCompleto,
          endereco: {
            Cep: values.CEP,
            numero: values.numero,
            cidade: values.cidade,
            descricao: values.endereco
          }
        }
      })
    }
  })

  const irParaPagamento = () => {
    if (formEntrega.isValid) {
      navigate('/Pagamento')
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in formEntrega.touched
    const estaInvalido = fieldName in formEntrega.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <Container>
      <SideBar>
        <form onSubmit={formEntrega.handleSubmit}>
          <Titulo>Entrega</Titulo>
          <div>
            <div>
              <label htmlFor="nomeCompleto">Quem irá receber</label>
              <input
                id="nomeCompleto"
                type="text"
                name="nomeCompleto"
                value={formEntrega.values.nomeCompleto}
                onChange={formEntrega.handleChange}
                onBlur={formEntrega.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'nomeCompleto',
                  formEntrega.errors.nomeCompleto
                )}
              </small>
            </div>
            <div>
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                type="text"
                name="endereco"
                value={formEntrega.values.endereco}
                onChange={formEntrega.handleChange}
                onBlur={formEntrega.handleBlur}
              />
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                value={formEntrega.values.cidade}
                onChange={formEntrega.handleChange}
                onBlur={formEntrega.handleBlur}
              />
            </div>
            <CepENumero>
              <div>
                <label htmlFor="CEP">CEP</label>
                <input
                  id="CEP"
                  type="text"
                  name="CEP"
                  value={formEntrega.values.CEP}
                  onChange={formEntrega.handleChange}
                  onBlur={formEntrega.handleBlur}
                />
                <small>{getErrorMessage('CEP', formEntrega.errors.CEP)}</small>
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input
                  id="numero"
                  type="text"
                  name="numero"
                  value={formEntrega.values.numero}
                  onChange={formEntrega.handleChange}
                  onBlur={formEntrega.handleBlur}
                />
                <small>
                  {getErrorMessage('numero', formEntrega.errors.numero)}
                </small>
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
  )
}

export default Entrega
