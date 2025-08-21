import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'
import { ComprarCartao } from '../store/reducers/form'

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
