import backgrund from '../../Assets/images/Fundo.svg'
import logo from '../../Assets/images/logo.svg'
import { Container, Imagem } from './styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${backgrund})` }}>
    <Container>
      <h2>Restaurantes</h2>
      <img src={logo} alt="" />
      <h3>0 produto(s) no carrinho</h3>
    </Container>
  </Imagem>
)

export default Header
