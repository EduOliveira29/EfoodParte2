import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'

type Produto = {
  id: 1
  price: 0
}

type ComprarCartao = {
  produto: Produto[]
  entrega: {
    nomeCompleto: string
    endereco: {
      descricao?: string
      cidade?: string
      Cep: string
      numero: number
      completemnto?: string
    }
  }

  pagamento: {
    cartao: {
      nomeCartao: string
      numeroCartao: string
      cvv: number
      vencimento: {
        mes: number
        ano: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getCardapiosDeRestaurantes: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    comprar: builder.mutation<any, ComprarCartao>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCardapiosDeRestaurantesQuery,
  useComprarMutation
} = api
export default api
