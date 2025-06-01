import IconeEstrela from '../../Assets/images/estrela.png'
import {
  Card,
  Nota,
  Titulo,
  Icon,
  Img,
  Descricao,
  BotãoLink,
  BotãoDestaque
} from './styles'
import { BotãoTag } from '../../styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurante = ({
  avaliacao,
  capa,
  descricao,
  destacado,
  id,
  tipo,
  titulo
}: Props) => {
  return (
    <Card>
      <Img src={capa} alt="" />
      {destacado === true && <BotãoDestaque>Destaque do dia</BotãoDestaque>}
      <BotãoTag>{tipo}</BotãoTag>
      <Nota>
        <Titulo>{titulo}</Titulo>
        <div>
          <p>
            <b>{avaliacao}</b>
          </p>
          <Icon src={IconeEstrela} alt="" />
        </div>
      </Nota>
      <Descricao>{descricao}</Descricao>
      <BotãoLink type="link" to={`/Perfil/${id}`}>
        Saiba mais
      </BotãoLink>
    </Card>
  )
}
export default Restaurante
