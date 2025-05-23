import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 82px 0;
`

export const Imagem = styled.div`
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  font-weight: bold;
  background-size: cover;
  color: ${Cores.corSecundaria};
`
