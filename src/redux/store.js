import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { cartSlice } from './app/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
