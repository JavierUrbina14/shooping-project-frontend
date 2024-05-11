import React from 'react'

export const AuthLayout = ({ children }) => {
  return (
    <div className='h-screen bg-secondary'>
      <div className='flex flex-col items-center justify-center w-full h-full rounded-md'>
        <div className='w-full max-w-md'>
          {children}
        </div>
      </div>
    </div>
  )
}
