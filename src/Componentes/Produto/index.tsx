import { Card, Titulo, Descricao, Botão, Container } from './styles'

type Props = {
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

const Produto = ({ cardapio }: Props) => {
  return (
    <Card>
      <img src={cardapio?.foto} alt="" />
      <Titulo>{cardapio?.nome}</Titulo>
      <Descricao>{cardapio?.descripiton}</Descricao>
      <Container>
        <Botão>Adicionar ao carrinho</Botão>
      </Container>
    </Card>
  )
}
export default Produto
