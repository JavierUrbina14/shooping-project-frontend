import { Footer, ListCards, Navbar } from '../components'

export const HomePage = () => {
  return (
    <div className='bg-primary h-screen'>
      <Navbar />
      <ListCards />
      <Footer />
    </div>
  )
}
