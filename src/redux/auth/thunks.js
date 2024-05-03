/* global localStorage */
import api from '../../config/axiosConfig'
import { checkingCredentials, clearErrorMessage, login, logout } from './authSlice'

export const startLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(checkingCredentials())

    setTimeout(async () => {
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
    }, 2000)
  }
}

export const startCreateUser = ({ firstname, lastname, email, password }) => {
  return (dispatch) => {
    dispatch(checkingCredentials())

    setTimeout(async () => {
      try {
        const { data } = await api.post('/auth/sign-up', { firstname, lastname, email, password })
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({ id: data.data.id, firstname: data.data.firstname, lastname: data.data.lastname, email: data.data.email }))
      } catch ({ response }) {
        dispatch(logout(response.data.msg))
        setTimeout(() => {
          dispatch(clearErrorMessage())
        }, 10)
      }
    }, 2000)
  }
}

export const checkAuthToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    if (!token) dispatch(logout())

    try {
      const { data } = await api.get('/auth/renew')
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.data.id, firstname: data.data.firstname, lastname: data.data.lastname, email: data.data.email }))
    } catch (error) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
