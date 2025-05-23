import ImagemFundo from '../../Assets/images/Fundo.svg'
import Logo from '../../Assets/images/logo.svg'
import instagram from '../../Assets/images/iconInstagram.png'
import facebook from '../../Assets/images/iconFacebook.png'
import twitter from '../../Assets/images/iconTwitter.png'

import { Imagem, ListaLinks } from './styles'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <img src={Logo} alt="" />
    <ListaLinks>
      <li>
        <img src={instagram} alt="" />
      </li>
      <li>
        <img src={facebook} alt="" />
      </li>
      <li>
        <img src={twitter} alt="" />
      </li>
    </ListaLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega,
      <br /> qualidade dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </Imagem>
)

export default Footer
