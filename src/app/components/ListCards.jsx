import { ListCardItem } from './ListCardItem'
import products from '../../data/products.json'

export const ListCards = () => {
  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
      {
        products.map(product => (
          <ListCardItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}
