import React, { useEffect } from 'react'
import { SearchField } from '../../components/SearchField'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateUser } from '../../redux/auth/thunks'
import { ToastContainer, toast } from 'react-toastify'

const initialForm = {
  firstname: '',
  lastname: '',
  email: '',
  firstPassword: '',
  secondPassword: ''
}

export const RegisterPage = () => {
  const [t] = useTranslation('global')
  const { errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { firstname, lastname, email, firstPassword, secondPassword, onInputChange } = useForm(initialForm)

  useEffect(() => {
    toast.error(errorMessage)
  }, [errorMessage])

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
            <Link to='/auth/sign-in'>
              <button type='button'>{t('registerpage.haveaccount')}</button>
            </Link>
            <button className='signupBtn' type='submit'>
              {t('registerpage.register')}
              <span className='arrow'>
                <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512' fill='rgb(183, 128, 255)'><path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' /></svg>
              </span>
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </AuthLayout>
  )
}
