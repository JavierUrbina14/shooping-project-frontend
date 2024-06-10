import { useState } from 'react'
import categories from '../../data/categories.json'

export const CategoriesNavbar = () => {
  const [open, setOpen] = useState(false)
  const [subcategories, setSubcategories] = useState()

  const HandleSubCategories = (categoryId, open) => {
    const subCategory = categories.filter(category => category.id === categoryId).flatMap(category => category.subcategories)
    setSubcategories(subCategory)
    setOpen(open)
  }

  return (
    <>
      <div className='flex gap-2 mt-2'>
        {
        categories.map(category => (
          <button key={category.id} className='btn-category' onClick={() => HandleSubCategories(category.id, !open)}>
            <span className='btn-category-text'>{category.category}</span>
          </button>
        ))
        }
      </div>
      {
        open &&
          <div className='absolute z-50 w-full bg-gray-100 flex py-5 px-2 gap-4' onMouseLeave={() => setOpen(false)}>
            {
              subcategories.map(subcategory => (
                <div key={subcategory.title}>
                  <button className='border rounded-md py-1 px-3'>{subcategory.title}</button>
                </div>
              ))
            }
          </div>
      }
    </>
  )
}
