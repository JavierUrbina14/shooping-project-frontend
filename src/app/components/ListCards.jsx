import { ListCardItem } from './'

export const ListCards = ({ products }) => {
  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mb-4'>
      {
        products.map(product => (
          <ListCardItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}
