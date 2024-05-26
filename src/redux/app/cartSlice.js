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
    },
    handleItemAdd (state, { payload }) {
      const newItem = payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalAmount += existingItem.price
      existingItem.quantity++
    },
    handleItemSubstract (state, { payload }) {
      const newItem = payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalAmount -= existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== newItem.id)
      } else {
        existingItem.quantity--
      }
    },
    handleItemRemove (state, { payload }) {
      const newItem = payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalAmount -= existingItem.price * existingItem.quantity
      state.items = state.items.filter(item => item.id !== newItem.id)
    }
  }
})

export const { addItemToCart, handleItemAdd, handleItemSubstract, handleItemRemove } = cartSlice.actions
