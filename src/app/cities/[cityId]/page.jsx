import React from 'react'

export const generateMetadata = async({ params }) => {
  const { cityId } = await params

    return {
      title: `City ${cityId}`
    }
}

const generateRandomError = (message) => {
  const random = Math.floor(Math.random() * 2)
  if(random === 0) {
    throw new Error(message)
  }
}

async function CityDetailsPage({ params }) {
  generateRandomError('Could not fetch the product')
  const { cityId } = await params

//   const res = fetch('/api/cities/' + cityId)

  return (
    <div className='text-6xl flex flex-col items-center justify-center'>
      CityDetailsPage
      <p>City id: { cityId }</p>
    </div> 
  )
}

export default CityDetailsPage