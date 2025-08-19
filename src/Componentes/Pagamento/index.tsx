import { useSelector } from 'react-redux'
import { formataPreço } from '../Produto'
import { RootReducer } from '../../store'
import { Container, SideBar, NumeroCartao, Vencimento } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useComprarMutation } from '../../services/api'
import { Botão, BotãoLink } from '../../styles'
import { useNavigate } from 'react-router-dom'

const Pagamento = () => {
  const navigate = useNavigate()
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
      mesvencimento: 0,
      anovencimento: 0
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string()
        .min(8, 'O nome deve apresentar pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      numeroCartao: Yup.string()
        .min(8, 'o campo deve ter 8 digitos')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'o campo deve conter 3 digitos')
        .max(3, 'o campo deve ter 4 digitos')
        .required('O campo é obrigatório'),
      anovencimento: Yup.number()
        .min(4, 'o campo deve ter 4 digitos')
        .required('O campo é obrigatório'),
      mesvencimento: Yup.number()
        .max(2, 'o campo deve ter 2 digitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const irParaPagamento = () => {
    if (formPagamento.isValid) {
      navigate('/Finalizacao')
    }
  }

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
            <div>
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
            </div>
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
                <label htmlFor="mesvencimento">Mês de vencimento</label>
                <input
                  id="mesvencimento"
                  type="number"
                  name="mesvencimento"
                  value={formPagamento.values.mesvencimento}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'mesvencimento',
                    formPagamento.errors.mesvencimento
                  )}
                </small>
              </div>
              <div>
                <label htmlFor="anovencimento">Ano de vencimento</label>
                <input
                  id="anovencimento"
                  type="number"
                  name="anovencimento"
                  value={formPagamento.values.anovencimento}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'anovencimento',
                    formPagamento.errors.anovencimento
                  )}
                </small>
              </div>
            </Vencimento>
          </div>
          <div className="botoes">
            <Botão type="submit" onClick={irParaPagamento}>
              Continuar com a entrega
            </Botão>
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
