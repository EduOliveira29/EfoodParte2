import { Botão } from '../../styles'
import {
  Container,
  SideBar,
  Titulo,
  Row,
  GrupoInput,
  GrupoInputNumerico,
  Botoes
} from './styles'

const Entrega = () => {
  return (
    <Container>
      <SideBar>
        <Titulo>Entrega</Titulo>
        <Row>
          <GrupoInput>
            <label htmlFor="nomeCompleto">Quem irá receber</label>
            <input id="nomeCompleto" type="text" />
          </GrupoInput>
          <GrupoInput>
            <label htmlFor="endereco">Endereço</label>
            <input id="endereco" type="text" />
          </GrupoInput>
          <GrupoInput>
            <label htmlFor="cidade">Cidade</label>
            <input id="cidade" type="text" />
          </GrupoInput>
          <GrupoInputNumerico>
            <div>
              <label htmlFor="CEP">CEP</label>
              <input id="CEP" type="text" />
            </div>
            <div>
              <label htmlFor="Numero">Número</label>
              <input id="Numero" type="text" />
            </div>
          </GrupoInputNumerico>
          <GrupoInput>
            <label htmlFor="">Complemento (opcional)</label>
            <input type="text" />
          </GrupoInput>
        </Row>
        <Botoes>
          <Botão>Continuar com o pagamento</Botão>
          <Botão>Voltar para o carrinho</Botão>
        </Botoes>
      </SideBar>
    </Container>
  )
}

export default Entrega
