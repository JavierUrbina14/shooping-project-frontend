import React from 'react'
import { SearchField } from '../../components/SearchField'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'
import { useDispatch } from 'react-redux'
import { startCreateUser } from '../../redux/auth/thunks'

const initialForm = {
  firstname: '',
  lastname: '',
  email: '',
  firstPassword: '',
  secondPassword: ''
}

export const RegisterPage = () => {
  const [t] = useTranslation('global')
  const dispatch = useDispatch()
  const { firstname, lastname, email, firstPassword, secondPassword, onInputChange } = useForm(initialForm)

  const HandleSubmit = (event) => {
    event.preventDefault()
    if (firstPassword !== secondPassword) {
      console.log('Las contraseñas no coinciden')
      return
    }

    dispatch(startCreateUser({ firstname, lastname, email, password: firstPassword }))
  }

  return (
    <AuthLayout>
      <form className='flex flex-col items-center justify-center w-full p-10 bg-white rounded shadow-md' onSubmit={HandleSubmit}>
        <div className='mb-4'>
          <h1 className='mb-4 text-3xl font-bold text-center'>{t('registerpage.title')}</h1>
        </div>
        <div className='w-full'>
          <div className='mb-2'>
            <SearchField
              placeholder={t('registerpage.name')}
              type='text'
              name='firstname'
              value={firstname}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-2'>
            <SearchField
              placeholder={t('registerpage.lastname')}
              type='text'
              name='lastname'
              value={lastname}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-2'>
            <SearchField
              placeholder={t('registerpage.email')}
              type='email'
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-2'>
            <SearchField
              placeholder={t('registerpage.password')}
              type='password'
              name='firstPassword'
              value={firstPassword}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-2'>
            <SearchField
              placeholder={t('registerpage.confirmpassword')}
              type='password'
              name='secondPassword'
              value={secondPassword}
              onChange={onInputChange}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button className='px-4 py-2 font-bold  bg-secondary rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline' type='submit'>{t('registerpage.register')}</button>
            <Link to='/auth/sign-in'>
              <button>{t('registerpage.haveaccount')}</button>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}
