import React from 'react'

export const generateMetadata = async({ params }) => {
  const { cityId } = await params

    return {
      title: `City ${cityId}`
    }
}

async function CityDetailsPage({ params }) {

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