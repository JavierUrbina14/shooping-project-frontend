import { Navbar } from '../components'
import { ListCards } from '../components/ListCards'

export const HomePage = () => {
  return (
    <div className='bg-primary h-screen'>
      <Navbar />
      <ListCards />
    </div>
  )
}
