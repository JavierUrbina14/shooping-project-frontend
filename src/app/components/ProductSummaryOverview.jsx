import formatterPrice from '../utils/formatterPrice'

export const ProductSummaryOverview = ({ products }) => {
  console.log(products)
  return (
    <div>
      <h1 className='font-bold text-4xl uppercase'>Tu Carrito</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className='border rounded'>
            <div className='flex'>
              <div>
                <img className='w-20' src={product.image} alt={product.name} />
              </div>
              <div>
                <h2 className='capitalize text-xl font-bold'>{product.name}</h2>
                <h6><span>Precio unitario: </span>{formatterPrice.format(product.price)}</h6>
                <h6><span>Cantidad: </span>{product.quantity}</h6>
              </div>
              <div>
                <p>{formatterPrice.format(product.price * product.quantity)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
