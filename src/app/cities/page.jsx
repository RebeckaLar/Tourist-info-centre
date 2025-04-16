import React from 'react'
import Link from 'next/link'

const CitiesPage = () => {
  return (
    <div className='text-6xl flex items-center justify-center'>
      <ul>
        <li><Link href='/cities/1'>City 1</Link></li>
        <li><Link href='/cities/2'>City 2</Link></li>
        <li><Link href='/cities/3'>City 3</Link></li>
        <li><Link href='/cities/4'>City 4</Link></li>
        <li><Link href='/cities/5'>City 5</Link></li>
      </ul>
    </div>
  )
}

export default CitiesPage