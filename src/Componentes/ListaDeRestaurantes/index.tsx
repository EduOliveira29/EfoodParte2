import { Restaurantes } from '../../pages/Home'
import Restaurante from '../Restaurante/index'
import { Container, Lista } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const ListaDeRestaurante = ({ restaurantes }: Props) => {
  return (
    <Container>
      {restaurantes.map((restaurantes) => (
        <Lista key={restaurantes.id}>
          <Restaurante
            id={restaurantes.id}
            titulo={restaurantes.titulo}
            descricao={restaurantes.descricao}
            destacado={restaurantes.destacado}
            capa={restaurantes.capa}
            tipo={restaurantes.tipo}
            avaliacao={restaurantes.avaliacao}
          />
        </Lista>
      ))}
    </Container>
  )
}
export default ListaDeRestaurante
