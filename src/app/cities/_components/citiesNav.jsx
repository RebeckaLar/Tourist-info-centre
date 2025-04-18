import React from 'react'
import Link from 'next/link'

export const CitiesNav = () => {
  return (
    <div className='mx-20 my-10 text-lg flex justify-center gap-7 uppercase'>
      <Link href='/cities' className='font-bold'>Metropolitans</Link>
      <div className='border border-gray-300'></div>
      <Link href=''>By Region</Link>
      <div className='border border-gray-300'></div>
      <Link href=''>By Activities</Link>
    </div>
  )
}