import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducers/cart'
import formReducer from './reducers/form'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
