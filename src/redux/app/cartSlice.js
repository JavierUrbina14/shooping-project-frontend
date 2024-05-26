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
      state.totalAmount += newItem.price
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({ ...newItem, quantity: 1 })
      }
    }
  }
})

export const { addItemToCart, handleSetActiveProduct } = cartSlice.actions
