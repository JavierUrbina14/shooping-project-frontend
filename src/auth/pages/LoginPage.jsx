import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SearchField } from '../../components/SearchField'
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../redux/auth/thunks'
import { ToastContainer, toast } from 'react-toastify'
import { Loading } from '../../components/Loading'

const intialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const [t] = useTranslation('global')
  const { email, password, onInputChange } = useForm(intialForm)
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    toast.error(errorMessage)
  }, [errorMessage])

  const HandleSubmit = (event) => {
    event.preventDefault()
    dispatch(startLogin({ email, password }))
  }

  return (
    <AuthLayout>
      <form className='flex flex-col items-center justify-center w-full p-10 bg-white rounded shadow-md' onSubmit={HandleSubmit}>
        <div className='mb-4'>
          <h1 className='mb-4 text-3xl font-bold text-center'>{t('loginpage.title')}</h1>
          <p className='text-sm text-center text-gray-500'>
            <Link to='/auth/sign-up'>
              <button type='button'>{t('loginpage.register')}</button>
            </Link>
          </p>
        </div>
        <div className='w-full'>
          <div className='mb-2'>
            <SearchField
              placeholder={t('loginpage.email')}
              type='email'
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-2'>
            <SearchField
              placeholder={t('loginpage.password')}
              type='password'
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className='flex items-center justify-between'>
            <a href='#' className='text-sm hover:text-primary-dark'>{t('loginpage.forgotpassword')}</a>
            <button className='signupBtn' type='submit'>
              {
                status === 'checking'
                  ? <Loading />
                  : <>
                    {t('loginpage.login')}
                    <span className='arrow'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512' fill='rgb(183, 128, 255)'><path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' /></svg>
                    </span>
                </> // eslint-disable-line
              }
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </AuthLayout>
  )
}
