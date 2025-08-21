import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type products = {
  id: 1
  price: 0
}

export type ComprarCartao = {
  products?: products[]
  delivery?: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      completemnto?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const initialState: ComprarCartao = {
  delivery: {
    receiver: '',
    address: {
      zipCode: '',
      city: '',
      description: '',
      number: 0
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        year: 0,
        month: 0
      }
    }
  },
  products: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ComprarCartao>) => {
      const ComprarCartaoState = action.payload
    }
  }
})

export const { adicionar } = formSlice.actions
export default formSlice.reducer
