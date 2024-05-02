import { Link } from 'react-router-dom'
import { SearchField } from '../../components/SearchField'
import { useTranslation } from 'react-i18next'
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'

const intialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const [t] = useTranslation('global')
  const { email, password, onInputChange } = useForm(intialForm)

  const HandleSubmit = (event) => {
    event.preventDefault()
    console.log({ email, password })
  }

  return (
    <AuthLayout>
      <form className='flex flex-col items-center justify-center w-full p-10 bg-white rounded shadow-md' onSubmit={HandleSubmit}>
        <div className='mb-4'>
          <h1 className='mb-4 text-3xl font-bold text-center'>{t('loginpage.title')}</h1>
          <p className='text-sm text-center text-gray-500'>
            <Link to='/auth/sign-up'>
              <button>{t('loginpage.register')}</button>
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
            <button className='px-4 py-2 font-bold  bg-secondary rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline'>{t('loginpage.login')}</button>
            <a href='#' className='text-sm hover:text-primary-dark'>{t('loginpage.forgotpassword')}</a>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}
