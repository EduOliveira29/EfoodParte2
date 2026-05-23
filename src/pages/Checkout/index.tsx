import { useFormik } from 'formik'
import Card from '../../Componentes/Card'
import {
  Botoes,
  CepENumero,
  Container,
  NumeroCartao,
  SideBar,
  Texto,
  Vencimento
} from './styles'
import * as Yup from 'yup'
import { useComprarMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreço } from '../../Componentes/Produto'
import { Botão, BotãoLink } from '../../styles'
import { useState } from 'react'

const Checkout = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [comprar, { isSuccess, data }] = useComprarMutation()
  const orderData = data as CompraResponse | undefined
  const { items } = useSelector((state: RootReducer) => state.cart)

  interface CompraResponse {
    orderId: string | number // ajuste para string ou number dependendo do seu backend
  }

  const PrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const formEntrega = useFormik({
    initialValues: {
      receiver: '',
      CEP: '',
      numero: 0,
      endereco: '',
      cidade: '',
      complemento: ''
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
      console.log()
    }
  })

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
        delivery: {
          receiver: formEntrega.values.receiver,
          address: {
            description: formEntrega.values.endereco,
            city: formEntrega.values.cidade,
            zipCode: formEntrega.values.CEP,
            number: formEntrega.values.numero,
            complemento: formEntrega.values.complemento
          }
        },
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
        products: [
          {
            id: 1,
            price: 0
          }
        ]
      })
    }
  })

  const erroFormEntrega = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in formEntrega.touched
    const estaInvalido = fieldName in formEntrega.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  const erroForm = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  const toggleVisibility = () => {
    if (formEntrega.dirty) {
      setIsVisible(!isVisible)
    }
  }

  return (
    <>
      {isSuccess && orderData ? (
        <Card title="Finalizaçao">
          <Container>
            <SideBar>
              <h2>Pedido realizado - Ordem {orderData.orderId}</h2>
              <Texto>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br /> <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br /> <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br /> <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </Texto>
              <Botão>Concluir</Botão>
            </SideBar>
          </Container>
        </Card>
      ) : (
        <>
          <Card title="Entrega">
            <Container>
              <SideBar>
                <form onSubmit={formEntrega.handleSubmit}>
                  <h2>Entrega</h2>
                  <div>
                    <div>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={formEntrega.values.receiver}
                        onChange={formEntrega.handleChange}
                        onBlur={formEntrega.handleBlur}
                      />
                      <small>
                        {erroFormEntrega(
                          'receiver',
                          formEntrega.errors.receiver
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
                      <small>
                        {erroFormEntrega(
                          'endereco',
                          formEntrega.errors.endereco
                        )}
                      </small>
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
                      <small>
                        {erroFormEntrega('cidade', formEntrega.errors.cidade)}
                      </small>
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
                        <small>
                          {erroFormEntrega('CEP', formEntrega.errors.CEP)}
                        </small>
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
                          {erroFormEntrega('numero', formEntrega.errors.numero)}
                        </small>
                      </div>
                    </CepENumero>
                    <div>
                      <label htmlFor="complemento">
                        Complemento (opcional)
                      </label>
                      <input
                        id="complemento"
                        type="text"
                        name="complemento"
                        value={formEntrega.values.complemento}
                        onChange={formEntrega.handleChange}
                        onBlur={formEntrega.handleBlur}
                      />
                      <small>
                        {erroFormEntrega(
                          'complemento',
                          formEntrega.errors.complemento
                        )}
                      </small>
                    </div>
                  </div>
                  <Botoes>
                    <Botão type="submit" onClick={toggleVisibility}>
                      Continuar com a entrega
                    </Botão>
                    <BotãoLink type="link" to={`/`}>
                      Voltar para o carrinho
                    </BotãoLink>
                  </Botoes>
                </form>
              </SideBar>
            </Container>
          </Card>
          <Card title="Pagamento">
            <Container className={isVisible ? '' : 'none'}>
              <SideBar>
                <form onSubmit={form.handleSubmit}>
                  <h2>
                    Pagamento - Valor a pagar {formataPreço(PrecoTotal())}
                  </h2>
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
                        {erroForm('nomeCartao', form.errors.nomeCartao)}
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
                          {erroForm('numeroCartao', form.errors.numeroCartao)}
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
                        <small>{erroForm('cvv', form.errors.cvv)}</small>
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
                          {erroForm('mesvencimento', form.errors.mesvencimento)}
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
                          {erroForm('anovencimento', form.errors.anovencimento)}
                        </small>
                      </div>
                    </Vencimento>
                  </div>
                  <div className="botoes">
                    <Botão type="submit">Finalizar pagamento</Botão>
                    <BotãoLink type="link" to={`/`}>
                      Voltar para a edição de endereço
                    </BotãoLink>
                  </div>
                </form>
              </SideBar>
            </Container>
          </Card>
        </>
      )}
    </>
  )
}

export default Checkout
