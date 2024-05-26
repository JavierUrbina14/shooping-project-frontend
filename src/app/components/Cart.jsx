import { ProductSummary, ProductSummaryOverview } from './'

export const Cart = ({ products }) => {
  return (
    <div className='flex justify-center gap-4'>
      <div>
        <ProductSummaryOverview products={products} />
      </div>
      <div className='pb-52'>
        <ProductSummary />
      </div>
    </div>
  )
}
