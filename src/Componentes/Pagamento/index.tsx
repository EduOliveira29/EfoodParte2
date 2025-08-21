import { useSelector } from 'react-redux'
import { formataPreço } from '../Produto'
import { RootReducer } from '../../store'
import { Container, SideBar, NumeroCartao, Vencimento } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Botão, BotãoLink } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { ComprarCartao } from '../../store/reducers/form'
import { useComprarMutation } from '../../services/api'

const Pagamento = () => {
  const ComprarCartao: ComprarCartao = {}
  const [comprar] = useComprarMutation()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const PrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
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
        .min(2, 'o campo deve ter 2 digitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      comprar({
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: values.cvv,
            expires: {
              year: values.anovencimento,
              month: values.mesvencimento
            }
          }
        },
        products: []
      })
    }
  })

  console.log(ComprarCartao)

  const irParaPagamento = () => {
    if (form.isValid) {
      navigate('/Finalizacao')
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <Container>
      <SideBar>
        <form onSubmit={form.handleSubmit}>
          <h2>Pagamento - Valor a pagar {formataPreço(PrecoTotal())}</h2>
          <div>
            <div>
              <label htmlFor="nomeCartao">Nome no cartão</label>
              <input
                id="nomeCartao"
                type="text"
                name="nomeCartao"
                value={form.values.nomeCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
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
                  value={form.values.numeroCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('numeroCartao', form.errors.numeroCartao)}
                </small>
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  className="cvv"
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
              </div>
            </NumeroCartao>
            <Vencimento>
              <div>
                <label htmlFor="mesvencimento">Mês de vencimento</label>
                <input
                  id="mesvencimento"
                  type="number"
                  name="mesvencimento"
                  value={form.values.mesvencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('mesvencimento', form.errors.mesvencimento)}
                </small>
              </div>
              <div>
                <label htmlFor="anovencimento">Ano de vencimento</label>
                <input
                  id="anovencimento"
                  type="number"
                  name="anovencimento"
                  value={form.values.anovencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('anovencimento', form.errors.anovencimento)}
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
