import { Navbar } from '../components'
import { ListCards } from '../components/ListCards'

export const HomePage = () => {
  return (
    <div className='bg-primary h-screen'>
      <Navbar />
      <section className='flex'>
        <ul className='w-48'>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ListCards />
      </section>
    </div>
  )
}
