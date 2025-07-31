import Footer from '../../Componentes/Footer'
import Hero from '../../Componentes/Hero'
import ListaDeRestaurante from '../../Componentes/ListaDeRestaurantes'

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Hero />
        <ListaDeRestaurante restaurantes={restaurantes} />
        <Footer />
      </>
    )
  }
  return <h4>Pagina carregando...</h4>
}
export default Home
