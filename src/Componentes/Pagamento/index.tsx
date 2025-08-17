import { useSelector } from 'react-redux'
import { formataPreço } from '../Produto'
import { RootReducer } from '../../store'
import {
  Container,
  NomeCartao,
  SideBar,
  NumeroCartao,
  Vencimento
} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useComprarMutation } from '../../services/api'
import { BotãoLink } from '../../styles'

const Pagamento = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const PrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const [comprar] = useComprarMutation()

  const formPagamento = useFormik({
    initialValues: {
      nomeCartao: '',
      numeroCartao: '',
      cvv: 0,
      Mesvencimento: 0,
      Anovencimento: 0
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string()
        .min(8, 'O nome deve apresentar pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      numeroCartao: Yup.string()
        .min(8, 'o campo deve ter 8 digitos')
        .required('O campo é obrigatório'),
      cvv: Yup.string().min(3, 'o campo deve conter 3 digitos'),
      Mesvencimento: Yup.string()
        .min(2, 'o campo deve conter 2 digitos')
        .max(2, 'o campo deve conter 2 digitos'),
      Anovencimento: Yup.string()
        .min(2, 'o campo deve conter 2 digitos')
        .max(2, 'o campo deve conter 2 digitos')
    }),
    onSubmit: (values) => {
      comprar({
        pagamento: {
          cartao: {
            nomeCartao: values.nomeCartao,
            numeroCartao: values.numeroCartao,
            cvv: values.cvv,
            vencimento: {
              ano: values.Anovencimento,
              mes: values.Mesvencimento
            }
          }
        }
      })
      console.log(comprar)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in formPagamento.touched
    const estaInvalido = fieldName in formPagamento.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <Container>
      <SideBar>
        <form onSubmit={formPagamento.handleSubmit}>
          <h2>Pagamento - Valor a pagar {formataPreço(PrecoTotal())}</h2>
          <div>
            <NomeCartao>
              <label htmlFor="nomeCartao">Nome no cartão</label>
              <input
                id="nomeCartao"
                type="text"
                name="nomeCartao"
                value={formPagamento.values.nomeCartao}
                onChange={formPagamento.handleChange}
                onBlur={formPagamento.handleBlur}
              />
              <small>
                {getErrorMessage('nomeCartao', formPagamento.errors.nomeCartao)}
              </small>
            </NomeCartao>
            <NumeroCartao>
              <div>
                <label htmlFor="numeroCartao">Número do cartão</label>
                <input
                  className="numeroCartao"
                  id="numeroCartao"
                  type="text"
                  name="numeroCartao"
                  value={formPagamento.values.numeroCartao}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'numeroCartao',
                    formPagamento.errors.numeroCartao
                  )}
                </small>
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  className="cvv"
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={formPagamento.values.cvv}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage('cvv', formPagamento.errors.cvv)}
                </small>
              </div>
            </NumeroCartao>
            <Vencimento>
              <div>
                <label htmlFor="Mesvencimento">Mês de vencimento</label>
                <input
                  id="Mesvencimento"
                  type="number"
                  name="Mesvenciomento"
                  value={formPagamento.values.Mesvencimento}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'Mesvencimento',
                    formPagamento.errors.Mesvencimento
                  )}
                </small>
              </div>
              <div>
                <label htmlFor="Anovencimento">Ano de vencimento</label>
                <input
                  id="Anovencimento"
                  type="number"
                  name="Anovencimento"
                  value={formPagamento.values.Anovencimento}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'Anovencimento',
                    formPagamento.errors.Anovencimento
                  )}
                </small>
              </div>
            </Vencimento>
          </div>
          <div className="botoes">
            <BotãoLink type="submit" to={`/Finalizacao`}>
              Finalizar pagamento
            </BotãoLink>
            <BotãoLink type="link" to={`/Entrega`}>
              Voltar para a edição de endereço
            </BotãoLink>
          </div>
        </form>
      </SideBar>
    </Container>
  )
}

export default Pagamento
