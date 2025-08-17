import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

export const Row = styled.div`
  display: block;
`

export const GrupoInput = styled.div`
  label {
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    height: 16px;
  }

  input {
    width: 95%;
    margin: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    background-color: ${Cores.corPrincipal};
    height: 32px;
  }
`

export const GrupoInputNumerico = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    height: 16px;
    color: ${Cores.corPrincipal};
  }

  input {
    width: 156px;
    height: 32px;
    margin: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    background-color: ${Cores.corPrincipal};
  }
`

export const Botoes = styled.div`
  margin-top: 24px;
`
