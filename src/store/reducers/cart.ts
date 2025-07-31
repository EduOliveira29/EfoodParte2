import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../pages/Perfil'

type CartState = {
  items: Restaurante['cardapio']
  estaAberto: boolean
}

const initialState: CartState = {
  items: [{ foto: '', preco: 0, id: 0, nome: '', descricao: '', porcao: '' }],

  estaAberto: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante['cardapio']>) => {
      state.items.push(action.payload)
    },
    abrir: (state) => {
      state.estaAberto = true
    },
    fechar: (state) => {
      state.estaAberto = false
    }
  }
})

export const { add, abrir, fechar } = cartSlice.actions
export default cartSlice.reducer
