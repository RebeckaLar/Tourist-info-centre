import React from 'react'

const CityDetailsPage = async ({ params }) => {

  const { cityId } = await params

//   const res = fetch('/api/cities/' + cityId)

  return (
    <div>
      <p>City id: { cityId }</p>
    </div>
  )
}

export default CityDetailsPage