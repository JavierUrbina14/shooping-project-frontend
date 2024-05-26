import { useSelector } from 'react-redux'
import formatterPrice from '../utils/formatterPrice'
import { ButtonCheck } from './ButtonCheck'

export const ProductSummary = () => {
  const { totalAmount } = useSelector((state) => state.cart)
  return (
    <div>
      <h1 className='uppercase text-2xl font-bold'>Resumen del pedido</h1>
      <p>Impuestos y envío calculado a la salida.</p>
      <div className='flex justify-between'>
        <h2>Subtotal:</h2>
        <span>{formatterPrice.format(totalAmount)}</span>
      </div>
      <div>
        <ButtonCheck />
      </div>
    </div>
  )
}
