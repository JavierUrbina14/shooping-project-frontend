import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <>
      <h1 className='font-bold text-center text-4xl uppercase'>Tu carrito</h1>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center pt-24 h-screen gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-shopping-bag' width='48' height='48' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z' /><path d='M9 11v-5a3 3 0 0 1 6 0v5' /></svg>
          <p>Tu carrito está vacío</p>
          <Link to='/'>
            <button className='Btn'>
              Empieza a comprar
              <svg viewBox='0 0 16 16' className='bi bi-cart-check' height='24' width='24' xmlns='http://www.w3.org/2000/svg' fill='#fff'>
                <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
                <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
