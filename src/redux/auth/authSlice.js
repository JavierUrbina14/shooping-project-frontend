import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // authenticated | not-authenticated | checking
    user: {},
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = null
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = null
    },
    checkingCredentials: (state, action) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = null
    }
  }
})

export const { login, logout, checkingCredentials } = authSlice.actions
