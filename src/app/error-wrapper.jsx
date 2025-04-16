"use client"
import React from 'react'
import { useState } from 'react'

const ErrorComponent = ({ message }) => {
    const [error, setError] = useState(false)

    if(error) {
        throw new Error(message)
    }

    return (
        <button className='py-2-px-10 bg-amber-600' onClick={() => setError(true)}>Simulate Error</button>
    )
}

export const ErrorWrapper = ({ children }) => {
  return (
    <div>
        <div>
            <ErrorComponent />
        </div>
        { children }
    </div>
  )
}