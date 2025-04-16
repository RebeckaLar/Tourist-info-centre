"use client"
import { useRouter } from 'next/navigation'
import React, { startTransition } from 'react'
import { useEffect } from 'react'

function Error({ error, reset }) {

  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div>
      <h1 className='text-6xl flex flex-col items-center justify-center'>
        Something went wrong when getting the city
      </h1>
      <button onClick={() => reload()} className='py-2 px-10 bg-amber-600 rounded ml-20 mb-20'>Try again</button>
    </div>
  )
}

export default Error