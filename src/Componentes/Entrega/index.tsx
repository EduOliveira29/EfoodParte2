import { useFormik } from 'formik'
import {
  Container,
  SideBar,
  Titulo,
  Row,
  GrupoInput,
  GrupoInputNumerico,
  Botoes
} from './styles'
import * as Yup from 'yup'
import { BotãoLink } from '../../styles'
import { useComprarMutation } from '../../services/api'

const Entrega = () => {
  const [comprar] = useComprarMutation()

  const formEntrega = useFormik({
    initialValues: {
      nomeCompleto: '',
      CEP: '',
      Numero: 0,
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
      Numero: Yup.string().min(1, 'o campo deve conter o número para entrega'),
      cidade: Yup.string().min(8, 'o campo deve estar preencido'),
      endereco: Yup.string().min(4, 'o campo deve estar preencido')
    }),
    onSubmit: (values) => {
      comprar({
        entrega: {
          nomeCompleto: values.nomeCompleto,
          endereco: {
            Cep: values.CEP,
            numero: values.Numero
          }
        }
      })
      console.log(comprar)
    }
  })

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
          <Row>
            <GrupoInput>
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
            </GrupoInput>
            <GrupoInput>
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                type="text"
                name="endereco"
                value={formEntrega.values.endereco}
                onChange={formEntrega.handleChange}
                onBlur={formEntrega.handleBlur}
              />
            </GrupoInput>
            <GrupoInput>
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                value={formEntrega.values.cidade}
                onChange={formEntrega.handleChange}
                onBlur={formEntrega.handleBlur}
              />
            </GrupoInput>
            <GrupoInputNumerico>
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
                <label htmlFor="Numero">Número</label>
                <input
                  id="Numero"
                  type="text"
                  name="Numero"
                  value={formEntrega.values.Numero}
                  onChange={formEntrega.handleChange}
                  onBlur={formEntrega.handleBlur}
                />
                <small>
                  {getErrorMessage('Numero', formEntrega.errors.Numero)}
                </small>
              </div>
            </GrupoInputNumerico>
            <GrupoInput>
              <label htmlFor="">Complemento (opcional)</label>
              <input type="text" />
            </GrupoInput>
          </Row>
          <Botoes>
            <BotãoLink type="submit" to={`/Pagamento`}>
              Continuar com a entrega
            </BotãoLink>
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
