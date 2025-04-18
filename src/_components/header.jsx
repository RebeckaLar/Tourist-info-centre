import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <nav className='mx-60 py-10 border-b-2 text-lg flex space-x-5 font-medium items-center'>
      <div className='text-3xl p-3 font-bold text-center text-amber-400'>
        <h1 className=''>SweTour</h1>
      </div>
      <Link href='/'>Home</Link>
      <Link href='/cities'>Cities</Link>
      <Link href='/about'>About Us</Link>
    </nav>
  )
}