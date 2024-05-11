export const ListCardItem = ({ product }) => {
  return (
    <div className='card'>
      <div className='image_container'>
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='image'>
          <path
            d='M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z'
          />
        </svg>
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
          <span>${product.price}</span>
        </div>
        <button className='button'>
          <svg viewBox='0 0 16 16' className='bi bi-cart-check' height='24' width='24' xmlns='http://www.w3.org/2000/svg' fill='#fff'>
            <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
            <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
          </svg>
          <p className='text'>Buy Now</p>
        </button>
      </div>
    </div>
  )
}
