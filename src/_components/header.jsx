import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='text-center py-10 bg-amber-700 text-3xl flex justify-center gap-4'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/cities'>Cities</Link>
    </div>
  )
}