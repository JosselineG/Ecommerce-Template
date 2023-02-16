import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './storeSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

