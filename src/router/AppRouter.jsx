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

  return (
    <>
      {
        status === 'authenticated'
          ? <Routes>
            <Route path='/*' element={<AppRoutes />} />
          </Routes>// eslint-disable-line

          : <Routes>
            <Route path='/*' element={<AppRoutes />} />
            <Route path='/auth/*' element={<AuthRoutes />} />
          </Routes>// eslint-disable-line
      }
    </>

  )
}
