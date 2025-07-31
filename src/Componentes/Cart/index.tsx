import iconExcluir from '../../Assets/images/iconExcluir.png'
import pizza from '../../Assets/images/pizza.png'
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
import { fechar } from '../../store/reducers/cart'

const Cart = () => {
  const { estaAberto } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const fecharCart = () => {
    dispatch(fechar())
  }
  return (
    <>
      <CartContainer className={estaAberto ? 'is-open' : ''}>
        <Overlay onClick={fecharCart} />
        <SideBar>
          <CartLista>
            <CartItem>
              <img src={pizza} alt="" />
              <InfosItem>
                <Titulo>Pizza Marguerita</Titulo>
                <Preco>R$ 60,90</Preco>
              </InfosItem>
              <ImgIcon>
                <img src={iconExcluir} alt="" />
              </ImgIcon>
            </CartItem>
            <CartItem>
              <img src={pizza} alt="" />
              <InfosItem>
                <Titulo>Pizza Marguerita</Titulo>
                <Preco>R$ 60,90</Preco>
              </InfosItem>
              <ImgIcon>
                <img src={iconExcluir} alt="" />
              </ImgIcon>
            </CartItem>
          </CartLista>
          <ValorFinal>
            <p>Valor total</p> <span>R$ 182,70</span>
          </ValorFinal>
          <Botão>Continuar com a entrega</Botão>
        </SideBar>
      </CartContainer>
    </>
  )
}
export default Cart
