import { useParams } from 'react-router-dom'
import Apresentacao from '../../Componentes/Apresentacao'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import ListaDeProdutos from '../../Componentes/ListaDeProdutos'
import { Container } from './styles'

import { useGetCardapiosDeRestaurantesQuery } from '../../services/api'
import Cart from '../../Componentes/Cart'

export type Restaurante = {
  foto: string
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao?: string
  capa?: string
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

const Perfil = () => {
  const { id } = useParams()
  const { data: Restaurante } = useGetCardapiosDeRestaurantesQuery(id!)

  if (Restaurante && Restaurante.cardapio) {
    return (
      <>
        <Cart />
        <Header />
        <Apresentacao />
        <Container>
          <ListaDeProdutos cardapio={Restaurante.cardapio} />
        </Container>
        <Footer />
      </>
    )
  }
  return <h4>Pagina carregando...</h4>
}

export default Perfil
