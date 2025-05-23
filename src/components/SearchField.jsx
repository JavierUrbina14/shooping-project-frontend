import React, { useRef, useState } from 'react'

export const SearchField = ({ placeholder, type, name, value, onChange }) => {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <>
      <div className='relative w-full'>
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete='off'
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          className='h-12 cursor-text w-full rounded-md border border-slate bg-gray-200 p-3.5 transition-colors duration-500 placeholder:select-none  placeholder:text-neutral-500 focus:border-[#8678F9] focus:outline-none'
        />
        <input
          ref={divRef}
          disabled
          style={{
            border: '1px solid #8678F9',
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`
          }}
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-0 z-10 h-12 w-full rounded-md border border-[#8678F9] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none'
        />
      </div>
    </>
  )
}
