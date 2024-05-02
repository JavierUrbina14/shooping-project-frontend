/* global localStorage */
import api from '../../config/axiosConfig'
import { checkingCredentials, clearErrorMessage, login, logout } from './authSlice'

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    try {
      const { data } = await api.post('/auth/sign-in', { email, password })
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.data.id, firstname: data.data.firstname, lastname: data.data.lastname, email: data.data.email }))
    } catch ({ response }) {
      dispatch(logout('Credendiales invalidas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }
}

export const startCreateUser = ({ firstname, lastname, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    try {
      const { data } = await api.post('/auth/sign-up', { firstname, lastname, email, password })
      console.log(data)
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.data.id, firstname: data.data.firstname, lastname: data.data.lastname, email: data.data.email }))
    } catch ({ response }) {
      console.log(response.data)
      dispatch(logout(response.data.msg))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }
}
