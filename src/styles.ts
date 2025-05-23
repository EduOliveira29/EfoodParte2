import { createGlobalStyle, styled } from 'styled-components'

export const Cores = {
  corPrincipal: '#FFEBD9',
  corSecundaria: '#E66767',
  corBranca: '#FFFFFF',
  corDeFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }


  body {
    background-color: ${Cores.corDeFundo};
    color: ${Cores.corBranca};
  }
`
export const Botão = styled.button`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  line-height: 100%;
  text-align: center;
  margin: 8px;
  padding: 8px;
  border: none;
`

export const BotãoTag = styled(Botão)`
  position: absolute;
  top: 16px;
  right: 16px;
  margin: 4px 6px;
  line-height: 100%;
  font-size: 12px;
  font-height: bold;
`
