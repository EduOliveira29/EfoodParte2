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
import { useDispatch } from 'react-redux'
import { abrir, add } from '../../store/reducers/cart'

export const formataPreço = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

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

  const dispatch = useDispatch()
  const Item = {
    foto: cardapio.foto,
    preco: cardapio.preco,
    id: cardapio.id,
    nome: cardapio.nome,
    descricao: cardapio.descricao,
    porcao: cardapio.porcao
  }

  const addToCart = () => {
    dispatch(add(Item))
    dispatch(abrir())
  }

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
            <BotãoModal onClick={addToCart}>
              Adicionar ao carrinho - {formataPreço(cardapio.preco)}
            </BotãoModal>
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
