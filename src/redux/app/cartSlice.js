import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart (state, { payload }) {
      const newItem = payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalAmount += newItem.precio
      if (existingItem) {
        existingItem.cantidad++
      } else {
        state.items.push({ ...newItem, cantidad: 1 })
      }
    }
  }
})

export const { addItemToCart, handleSetActiveProduct } = cartSlice.actions
