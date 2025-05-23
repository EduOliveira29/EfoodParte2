import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.corBranca};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${Cores.corSecundaria};
    text-align: center;
    font-size: 10px;
  }
`
export const ListaLinks = styled.ul`
  display: flex;
  padding: 64px 8px;

  li {
    margin: 8px;
  }
`
