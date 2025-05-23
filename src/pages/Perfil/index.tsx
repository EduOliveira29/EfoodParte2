import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Apresentacao from '../../Componentes/Apresentacao'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import ListaDeProdutos from '../../Componentes/ListaDeProdutos'
import { Container } from './styles'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descripiton: string
    porcao: string
  }
}

const Perfil = () => {
  const { id } = useParams()
  const [Restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <Header />
      <Apresentacao />
      <Container>
        <ListaDeProdutos restaurante={Restaurante} />
      </Container>
      <Footer />
    </>
  )
}
export default Perfil
