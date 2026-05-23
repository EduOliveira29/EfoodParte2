import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'

type products = {
  id: 1
  price: 0
}

export type ComprarCartao = {
  products: products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complemento?: string
    }
  }
  payment: {
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

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getCardapiosDeRestaurantes: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    comprar: builder.mutation<unknown, ComprarCartao>({
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
