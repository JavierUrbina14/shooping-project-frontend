import { ListCardItem } from './ListCardItem'
import products from '../../data/products.json'

export const ListCards = () => {
  return (
    <div className='grid grid-cols-4 justify-items-center bg-secondary w-full rounded-lg mb-4 mr-4'>
      {
        products.map(product => (
          <ListCardItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}
