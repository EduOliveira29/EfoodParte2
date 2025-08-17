import styled from 'styled-components'
import { Botão, Cores } from '../../styles'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${Botão} {
    width: 95%;
    background-color: ${Cores.corPrincipal};
    color: ${Cores.corSecundaria};
    Line height: 100%;
    font-size: 14px;
    font-weight: bold;
  }

  h3 {
    margin: 32px 0 16px 8px;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.corSecundaria};
  z-index: 1;
  max-width: 360px;
  height: 1624px;
  width: 100%;
`
export const Texto = styled.p`
  margin: 0 8px 24px 8px;
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.corPrincipal};
`
