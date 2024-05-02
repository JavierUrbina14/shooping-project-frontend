export const ListCardItem = ({ product }) => {
  return (
    <div className='w-64 h-64 bg-white m-4 p-4 rounded-lg shadow-lg'>
      <p>{product.image}</p>
      <h2 className='text-xl font-bold'>{product.name}</h2>
      <h3>{product.price}</h3>
      <button className='bg-gray-400'>
        Añadir al carrito
      </button>
    </div>
  )
}
