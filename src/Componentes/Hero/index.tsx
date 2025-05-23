import ImagemFundo from '../../Assets/images/Fundo.svg'
import Logo from '../../Assets/images/logo.svg'
import { Imagem } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <img src={Logo} alt="" />
    <h1>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h1>
  </Imagem>
)

export default Hero
