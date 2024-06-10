import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPage, LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route path='/admin/sign-in' element={<AdminPage />} />
        <Route path='/*' element={<Navigate to='/auth/sign-in' />} />
      </Routes>
    </div>
  )
}
