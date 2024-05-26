import { ProductSummary, ProductSummaryOverview } from './'

export const Cart = ({ products }) => {
  return (
    <div className='flex'>
      <ProductSummaryOverview products={products} />
      <ProductSummary />
    </div>
  )
}
