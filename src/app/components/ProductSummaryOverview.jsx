import { Link } from 'react-router-dom'
import formatterPrice from '../utils/formatterPrice'
import { useDispatch } from 'react-redux'
import { handleItemAdd, handleItemRemove, handleItemSubstract } from '../../redux/app/cartSlice'

export const ProductSummaryOverview = ({ products }) => {
  const dispatch = useDispatch()
  const handleAdd = (product) => {
    dispatch(handleItemAdd(product))
  }

  const handleSubtract = (product) => {
    dispatch(handleItemSubstract(product))
  }

  const handleRemove = (product) => {
    dispatch(handleItemRemove(product))
  }

  return (
    <div>
      <h1 className='font-bold text-3xl uppercase'>Tu Carrito</h1>
      <div className='mt-4'>
        {products.map((product) => (
          <div key={product.product_id} className='border rounded p-4 mt-1 mb-2'>
            <div className='flex gap-8'>
              <div className='flex justify-center items-center'>
                <img className='w-20' src={product.image} alt={product.name} />
              </div>
              <div className='w-64'>
                <Link to={`/product/${product.product_id}`}>
                  <h2 className='capitalize text-xl font-bold'>{product.name}</h2>
                </Link>
                <h6><span>Precio unitario: </span>{formatterPrice.format(product.price)}</h6>
                <h6><span>Talla: </span>{product.size}</h6>
                <div className='flex items-center gap-1'>
                  <div className='inline-flex border gap-1'>
                    <button onClick={() => handleSubtract(product)} className='w-9'>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleAdd(product)} className='w-9'>+</button>
                  </div>
                  <button onClick={() => handleRemove(product)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-trash'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' />
                      <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                      <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <p className='text-lg'>{formatterPrice.format(product.price * product.quantity)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
