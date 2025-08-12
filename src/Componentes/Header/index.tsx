import backgrund from '../../Assets/images/Fundo.svg'
import logo from '../../Assets/images/logo.svg'
import { BotãoLink, Container, Imagem } from './styles'

import { abrir } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(abrir())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${backgrund})` }}>
      <Container>
        <BotãoLink type="link" to={`/`}>
          Restaurantes
        </BotãoLink>
        <img src={logo} alt="" />
        <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
      </Container>
    </Imagem>
  )
}
export default Header