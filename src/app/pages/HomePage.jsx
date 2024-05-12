import { Footer, ListCards, Navbar } from '../components'
import { ProductsService } from '../services/productsService'
import { useEffect, useState } from 'react'
// import products from '../../data/products.json'

export const HomePage = () => {
  const [products, setProducts] = useState([])
  const { getAllProducts } = ProductsService()

  const fetchProducts = async () => {
    const { data } = await getAllProducts()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='bg-primary h-screen'>
      <Navbar />
      <ListCards products={products} />
      <Footer />
    </div>
  )
}
