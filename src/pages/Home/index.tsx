import { useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import Hero from '../../Componentes/Hero'
import ListaDeRestaurante from '../../Componentes/ListaDeRestaurantes'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Hero />
      <ListaDeRestaurante restaurantes={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
