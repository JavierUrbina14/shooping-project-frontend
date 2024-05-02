import api from '../../config/axiosConfig'
import { checkingCredentials, login } from './authSlice'

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    try {
      const response = await api.post('/auth/sign-in', { email, password })
      console.log(response.data)
      dispatch(login(response.data.data))
    } catch (error) {
      console.error(error.response.data)
    }
  }
}

export const startCreateUser = ({ firstname, lastname, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    try {
      const response = await api.post('/auth/sign-up', { firstname, lastname, email, password })
      console.log(response)
      dispatch(login(response.data.data))
    } catch (error) {
      console.error(error.response.data)
    }
  }
}
