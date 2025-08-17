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

  h2 {
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 100%;
    margin: 32px 0 16px 8px;
    color: ${Cores.corDeFundo};
  }

  label {
    color: ${Cores.corDeFundo};
    margin: 8px;
    height: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
  }

  input {
    margin: 8px;
    height: 32px;
    background-color: ${Cores.corDeFundo};
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
  }

  .botoes {
    margin-top: 24px;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.corSecundaria};
  z-index: 1;
  max-width: 360px;
  height: 1624px;
  width: 100%;
`

export const NomeCartao = styled.div`
  input {
    width: 95%;
  }
`
export const NumeroCartao = styled.div`
  display: flex;
  flex: auto;

  div {
    display: flex;
    flex-direction: column;
  }

  .numeroCartao {
    width: 228px;
  }

  .cvv {
    width: 88px;
  }
`

export const Vencimento = styled.div`
  display: flex;
  flex: auto;

  div {
    flex-direction: column;
  }
`
