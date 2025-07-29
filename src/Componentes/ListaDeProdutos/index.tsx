import { Restaurante } from '../../pages/Perfil'
import Produto from '../Produto'
import { Container, Lista } from './styles'

type Props = {
  cardapio: Restaurante['cardapio']
}

const ListaDeProdutos = ({ cardapio }: Props) => {
  return (
    <>
      <Container>
        {cardapio?.map((cardapio) => (
          <Lista key={cardapio.id}>
            <Produto cardapio={cardapio} />
          </Lista>
        ))}
      </Container>
    </>
  )
}
export default ListaDeProdutos
