import { useParams } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import { useEffect, useState } from 'react'
import { ProductsService } from '../services/productsService'
import formatterPrice from '../utils/formatterPrice'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/app/cartSlice'

export const ProductPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { getProductById } = ProductsService()

  const fetchProduct = async () => {
    const { data } = await getProductById(id)
    setProduct(data)
  }

  const handleProduct = (product) => () => {
    dispatch(addItemToCart(product))
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div>
          <img style={{ width: '600px' }} src={product.image} />
        </div>
        <div>
          <div>
            <h1 className='text-4xl font-bold capitalize'>{product.name}</h1>
            <h6 className='w-96'>{product.description}</h6>
            <h6 className='capitalize'><span className='font-bold'>Categoría: </span>{product.category}</h6>
            <h6 className='capitalize'><span className='font-bold'>Marca: </span>{product.brand}</h6>
            <h6 className='capitalize'><span className='font-bold'>Talla: </span>{product.size}</h6>
            <h6 className='capitalize'><span className='font-bold'>Stock disponible: </span>{product.stock}</h6>
            <div className='flex justify-around mt-4'>
              <h2 className='text-4xl'>{formatterPrice.format(product.price)}</h2>
              <button className='Btn' onClick={handleProduct(product)}>
                Añadir al carrito
                <svg viewBox='0 0 16 16' className='bi bi-cart-check' height='24' width='24' xmlns='http://www.w3.org/2000/svg' fill='#fff'>
                  <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
                  <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
