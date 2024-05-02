/* global localStorage */
import { Link } from 'react-router-dom'
import { SearchField } from '../../components/SearchField'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { CategoriesNavbar } from './CategoriesNavbar'

export const Navbar = () => {
  const [t, i18n] = useTranslation('global')
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es')

  useEffect(() => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }, [language])

  return (
    <div className='p-4 bg-primary'>
      <div className='flex justify-around items-center'>
        <div>
          <h1>Logo</h1>
          <button onClick={() => setLanguage('es')}>es</button>
          <button onClick={() => setLanguage('en')}>en</button>
        </div>
        <div className='w-96'>
          <SearchField
            placeholder={t('navbar.searchplaceholder')}
            type='text'
          />
        </div>
        <div className='flex gap-6 '>
          <Link to='/auth/sign-in'>
            <button>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /><path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' /></svg>
            </button>
          </Link>
          <Link to='/shopping-cart'>
            <button>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-shopping-bag' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z' /><path d='M9 11v-5a3 3 0 0 1 6 0v5' /></svg>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <CategoriesNavbar />
      </div>
    </div>
  )
}
