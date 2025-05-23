import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.corBranca};
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  h1 {
    color: ${Cores.corSecundaria};
  }
`
