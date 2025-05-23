import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.corBranca};
  line-height: 100%;
  font-size: 32px;
  display: flex;
`
export const Container = styled.div`
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: space-around;

  h2 {
    font-weight: 100;
  }

  h3 {
    font-weight: 900;
  }
`
