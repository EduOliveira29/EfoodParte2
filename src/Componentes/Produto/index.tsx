import { useState } from 'react'
import {
  Card,
  Titulo,
  Descricao,
  Botão,
  Modal,
  ModalContainer,
  TituloModal,
  Texto,
  BotãoModal
} from './styles'

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
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card>
        <img src={cardapio.foto} alt="" />
        <Titulo>{cardapio.nome}</Titulo>
        <Descricao>{cardapio.descricao}</Descricao>
        <Botão onClick={() => setModalEstaAberto(true)}>Mais Detalhes</Botão>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContainer className="container">
          <img src={cardapio.foto} alt="" />
          <div>
            <TituloModal>{cardapio.nome}</TituloModal>
            <Texto>{cardapio.descricao}</Texto>
            <Texto>Serve de: {cardapio.porcao}</Texto>
            <BotãoModal>Adicionar ao carrinho - R$ {cardapio.preco}</BotãoModal>
          </div>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}
export default Produto
