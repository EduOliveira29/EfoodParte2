import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../pages/Perfil'

type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  items: ItemCardapio[]
  estaAberto: boolean
}

const initialState: CartState = {
  items: [],
  estaAberto: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante['cardapio'][0]>) => {
      const ItemCardapio = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!ItemCardapio) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    abrir: (state) => {
      state.estaAberto = true
    },
    fechar: (state) => {
      state.estaAberto = false
    }
  }
})

export const { add, abrir, fechar, remove } = cartSlice.actions
export default cartSlice.reducer
