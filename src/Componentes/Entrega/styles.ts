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
  }

  label {
    margin: 8px;
    font-size: 14px;
    line-height: 100%;
    height: 16px;
  }

  input {
    width: 95%;
    margin: 8px;
    font-size: 14px;
    line-height: 100%;
    background-color: ${Cores.corPrincipal};
    height: 32px;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.corSecundaria};
  z-index: 1;
  max-width: 360px;
  height: 1624px;
  width: 100%;
`

export const Titulo = styled.h2`
  font-size: 16px;
  line-height: 100%;
  font-weight: bold;
  margin: 32px 0 16px 8px;
  color: ${Cores.corPrincipal};
`

export const CepENumero = styled.div`
  display: flex;
  width: 95%;
`

export const Botoes = styled.div`
  margin-top: 24px;
`
