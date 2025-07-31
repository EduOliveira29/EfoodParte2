import backgrund from '../../Assets/images/Fundo.svg'
import logo from '../../Assets/images/logo.svg'
import { Container, Imagem } from './styles'

import { abrir } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(abrir())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${backgrund})` }}>
      <Container>
        <h2>Restaurantes</h2>
        <img src={logo} alt="" />
        <a onClick={openCart}>0 produto(s) no carrinho</a>
      </Container>
    </Imagem>
  )
}
export default Header
