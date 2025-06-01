import { Card, Titulo, Descricao, Botão } from './styles'

type Props = {
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Produto = ({ cardapio }: Props) => {
  return (
    <Card>
      <img src={cardapio.foto} alt="" />
      <Titulo>{cardapio.nome}</Titulo>
      <Descricao>{cardapio.descricao}</Descricao>
      <Botão>Mais Detalhes</Botão>
    </Card>
  )
}
export default Produto
