import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${Cores.corSecundaria};
  padding: 8px;

  img {
    height: 168px;
    width: 100%;
    object-fit: cover;
  }
`

export const Titulo = styled.h4`
  padding: 16px 8px;
  font-size: 16px;
  line-height: 100%;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  padding: 16px 8px;
`

export const Botão = styled.button`
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  line-height: 100%;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  width: 100%;
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.80);
    `

export const ModalContainer = styled.div`
  background-color: ${Cores.corSecundaria};
  max-width: 1024px;
  max-height: 344px;
  display: flex;
  position: relative;
  z-index: 1;

  img {
    width: 280px;
    height: 280px;
    margin: 24px;
    object-fit: cover;
  }
`

export const TituloModal = styled.h4`
  padding-top: 24px;
  font-size: 18px;
  line-heigth: 100%;
  font-weight: 900;
`

export const Texto = styled.p`
  padding: 16px 0;
  color: ${Cores.corBranca}
  line-heigth: 22px;
  font-size: 14px;
  font-weight: 400;
`

export const BotãoModal = styled.button`
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  line-height: 100%;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  border: none;
`
