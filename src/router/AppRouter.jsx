import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { AppRoutes } from '../app/routes/AppRoutes'
import { checkAuthToken } from '../redux/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthToken())
  }, [])

  if (status === 'checking') {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/*' element={<AppRoutes />} />
      <Route path='/auth/*' element={<AuthRoutes />} />
    </Routes>
  )
}
