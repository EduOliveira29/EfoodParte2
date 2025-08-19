import styled from 'styled-components'
import { Botão, Cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  ${Botão} {
    width: 95%;
    background-color: ${Cores.corPrincipal};
    color: ${Cores.corSecundaria};
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  background-color: ${Cores.corSecundaria};
  z-index: 1;
  max-width: 360px;
  width: 100%;
`

export const CartLista = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding-top: 32px;
`

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${Cores.corDeFundo};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
  }
`

export const InfosItem = styled.div`
  padding: 8px 0 16px 8px;
  width: 100%;
`

export const Titulo = styled.h3`
  color: ${Cores.corSecundaria};
  font-size: 18px;
  line-height: 100%;
  padding-bottom: 16px;
`

export const Preco = styled.p`
  color: ${Cores.corSecundaria};
  font-size: 14px;
  line-height: 22px;
`

export const ImgIcon = styled.div`
  display: flex;
  justify-content: left;
  align-items: end;

  img {
    width: 16px;
    height: 16px;
  }
`

export const ValorFinal = styled.div`
  padding: 24px 8px 16px;
  display: flex;
  justify-content: space-between;
  Line height: 100%;
  font-size: 14px;
  font-weight: bold;
  color: ${Cores.corPrincipal}
`
