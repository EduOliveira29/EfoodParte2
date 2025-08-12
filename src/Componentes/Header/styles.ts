import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } forma 'react-router-dom'

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

export const BotãoLink = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: ${Cores.corSecundaria};
  text-decoration: none;
`
