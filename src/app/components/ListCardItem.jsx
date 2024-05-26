import { Link } from 'react-router-dom'
import formatterPrice from '../utils/formatterPrice'

export const ListCardItem = ({ product }) => {
  return (
    <div className='card'>
      <div className='image_container'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='title'>
        <span>{product.name}</span>
      </div>
      <div className='size'>
        <span>Size</span>
        <ul className='list-size'>
          <li className='item-list'><button className='item-list-button'>37</button></li>
          <li className='item-list'><button className='item-list-button'>38</button></li>
          <li className='item-list'><button className='item-list-button'>39</button></li>
          <li className='item-list'><button className='item-list-button'>40</button></li>
          <li className='item-list'><button className='item-list-button'>41</button></li>
        </ul>
      </div>
      <div className='action'>
        <div className='price'>
          <span>{formatterPrice.format(product.price)}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <button className='button'>
            <svg viewBox='0 0 16 16' className='bi bi-cart-check' height='16' width='16' xmlns='http://www.w3.org/2000/svg' fill='#fff'>
              <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
              <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
            </svg>
            <p className='text'>Buy Now</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
