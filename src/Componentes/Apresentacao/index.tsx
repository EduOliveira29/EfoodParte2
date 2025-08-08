import { Container, Imagem } from './styles'
import { useGetRestaurantesQuery } from '../../services/api'

const Apresentacao = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Imagem style={{ backgroundImage: `url(${restaurantes[0].capa})` }}>
          <Container>
            <h2>{restaurantes[0].tipo}</h2>
            <h3>{restaurantes[0].titulo}</h3>
          </Container>
        </Imagem>
      </>
    )
  }
  return <h4>Pagina carregando...</h4>
}
export default Apresentacao
