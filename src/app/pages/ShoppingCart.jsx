import { useSelector } from 'react-redux'
import { Navbar, Footer, EmptyCart, Cart } from '../components'

export const ShoppingCart = () => {
  const { items } = useSelector((state) => state.cart)
  return (
    <>
      <Navbar />
      {items.length === 0 ? <EmptyCart /> : <Cart products={items} />}
      <Footer />
    </>
  )
}
