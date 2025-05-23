import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../../pages/Perfil'
import { Container, Imagem } from './styles'

const Apresentacao = () => {
  const { id } = useParams()
  const [Restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${Restaurante?.capa})` }}>
        <Container>
          <h2>{Restaurante?.tipo}</h2>
          <h3>{Restaurante?.titulo}</h3>
        </Container>
      </Imagem>
    </>
  )
}
export default Apresentacao
