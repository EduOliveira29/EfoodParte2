import iconExcluir from '../../Assets/images/iconExcluir.png'
import { Botão } from '../../styles'
import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  CartLista,
  Titulo,
  Preco,
  ImgIcon,
  ValorFinal,
  InfosItem
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechar, remove } from '../../store/reducers/cart'
import { formataPreço } from '../Produto'

const Cart = () => {
  const { estaAberto, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const fecharCart = () => {
    dispatch(fechar())
  }

  const removerDoCart = (id: number) => {
    dispatch(remove(id))
  }

  const PrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <CartContainer className={estaAberto ? 'is-open' : ''}>
        <Overlay onClick={fecharCart} />
        <SideBar>
          <CartLista>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <InfosItem>
                  <Titulo>{item.nome}</Titulo>
                  <Preco>{formataPreço(item.preco)}</Preco>
                </InfosItem>
                <ImgIcon>
                  <img
                    onClick={() => removerDoCart(item.id)}
                    src={iconExcluir}
                    alt=""
                  />
                </ImgIcon>
              </CartItem>
            ))}
          </CartLista>
          <ValorFinal>
            <p>Valor total</p> <span>R$ {formataPreço(PrecoTotal())}</span>
          </ValorFinal>
          <Botão>Continuar com a entrega</Botão>
        </SideBar>
      </CartContainer>
    </>
  )
}
export default Cart
