import { Restaurante } from '../../pages/Perfil'
import Produto from '../Produto'
import { Container, Lista } from './styles'

type Props = {
  restaurante: Restaurante[]
}

const ListaDeProdutos = ({ restaurante }: Props) => {
  return (
    <Container>
      {restaurante.map((restaurante) => (
        <Lista key={restaurante.id}>
          <Produto
            id={restaurante.id}
            titulo={restaurante.titulo}
            descricao={restaurante.descricao}
            destacado={restaurante.destacado}
            capa={restaurante.capa}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            cardapio={restaurante.cardapio}
          />
        </Lista>
      ))}
    </Container>
  )
}
export default ListaDeProdutos
