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
          <button key={category.id} className='p-1 bg-slate-400' onClick={() => HandleSubCategories(category.id, !open)}>
            <p>{category.category}</p>
          </button>
        ))
        }
      </div>
      <div className='block' onMouseLeave={() => setOpen(false)}>
        {
        open &&
          subcategories.map(subcategory => (
            <ul key={subcategory.title}>
              <li>{subcategory.title}</li>
            </ul>
          ))
      }
      </div>
    </>
  )
}
