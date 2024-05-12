export const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-900 text-white p-4 text-center'>
        <p>
          © {new Date().getFullYear()} - Todos los derechos reservados. &nbsp;
          <a href='mailto:jav.torresu@gmail.com' target='_blank' className='hover:cursor-pointer hover:border-b' rel='noreferrer'>Desarrollado por Javier Urbina</a>
        </p>
      </div>
    </footer>
  )
}
