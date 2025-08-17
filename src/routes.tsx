import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Entrega from './Componentes/Entrega'
import Pagamento from './Componentes/Pagamento'
import Finalizacao from './Componentes/Finalizacao'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
    <Route path="/Entrega" element={<Entrega />} />
    <Route path="/Pagamento" element={<Pagamento />} />
    <Route path="/Finalizacao" element={<Finalizacao />} />
  </Routes>
)

export default Rotas
