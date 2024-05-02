import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, ShoppingCart } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to='/' />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
    </Routes>
  )
}
