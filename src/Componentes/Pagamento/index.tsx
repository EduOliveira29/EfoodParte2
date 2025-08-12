import { useSelector } from 'react-redux'
import { formataPreço } from '../Produto'
import { RootReducer } from '../../store'
import { Container, SideBar } from './styles'
import { Botão } from '../../styles'

const Pagamento = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const PrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <Container>
      <SideBar>
        <h2>Pagamento - Valor a pagar {formataPreço(PrecoTotal())}</h2>
        <div>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input id="nomeCartao" type="text" />
        </div>
        <div>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input id="numeroCartao" type="text" />
          <label htmlFor="CVVCartao">CVV</label>
          <input id="CVVCartao" type="text" />
        </div>
        <div>
          <label htmlFor="Mesvencimento">Mês de vencimento</label>
          <input id="Mesvencimento" type="text" />
          <label htmlFor="Anovencimento">Ano de vencimento</label>
          <input id="Anovencimento" type="text" />
        </div>
        <div>
          <Botão>Finalizar pagamento</Botão>
          <Botão>Voltar para a edição de endereço</Botão>
        </div>
      </SideBar>
    </Container>
  )
}

export default Pagamento
