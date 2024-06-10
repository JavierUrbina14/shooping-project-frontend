import { useSelector } from 'react-redux'
import formatterPrice from '../utils/formatterPrice'
import { ButtonCheck } from './ButtonCheck'

export const ProductSummary = () => {
  const { totalAmount } = useSelector((state) => state.cart)
  return (
    <div className='border solid rounded p-4'>
      <h1 className='uppercase text-2xl font-bold'>Resumen del pedido</h1>
      <p className='mt-3 mb-3'>Impuestos y envío calculado a la salida.</p>
      <div className='flex justify-between mt-2 mb-2'>
        <h2 className='text-xl font-bold'>Subtotal:</h2>
        <span className='text-xl font-bold'>{formatterPrice.format(totalAmount)}</span>
      </div>
      <div>
        <div className='flex justify-between border solid p-2'>
          <div className='flex gap-1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5' />
              <path d='M3 9l4 0' />
            </svg>
            <h6>Envío</h6>
          </div>
          <ButtonCheck />
        </div>
        <div className='flex justify-between border solid p-2'>
          <div className='flex gap-1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-building-store'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21l18 0' /><path d='M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4' /><path d='M5 21l0 -10.15' />
              <path d='M19 21l0 -10.15' />
              <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4' />
            </svg>
            <h6>Retiro en tienda</h6>
          </div>
          <ButtonCheck />
        </div>
      </div>
      <div className='flex mt-4 justify-center'>
        <button className='Btn'>Finalizar compra</button>
      </div>
    </div>
  )
}
