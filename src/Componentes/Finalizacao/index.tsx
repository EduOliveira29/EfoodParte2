import { Botão } from '../../styles'
import { Container, SideBar, Texto } from './styles'
import { useComprarMutation } from '../../services/api'

const Finalizacao = () => {
  const [comprar] = useComprarMutation()

  console.log(comprar)

  return (
    <Container>
      <SideBar>
        <h3>Pedido realizado - Ordem {}</h3>
        <Texto>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br /> <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br /> <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br /> <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Texto>
        <Botão>Concluir</Botão>
      </SideBar>
    </Container>
  )
}

export default Finalizacao
