import { useParams } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import { useEffect, useState } from 'react'
import { ProductsService } from '../services/productsService'

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { getProductById } = ProductsService()

  const fetchProduct = async () => {
    const { data } = await getProductById(id)
    setProduct(data)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <Navbar />
      <ul>
        <li>{product.name}</li>
        <li><img style={{ width: '100px' }} src={product.image} /></li>
        <li>{product.price}</li>
        <li>{product.category}</li>
        <li>{product.stock}</li>
        <li>{product.description}</li>
        <li>{product.rating}</li>
        <li>{product.size}</li>
        <li>{product.brand}</li>
      </ul>
      <Footer />
    </>
  )
}
