import React from 'react'
import { promises as fs } from 'fs';

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
  // generateRandomError('Could not fetch the product')

  const { cityId } = await params
      const file = await fs.readFile(process.cwd() + '/public/cities.json', 'utf8');
      const cities = JSON.parse(file);    
      const newArray = Array.from(cities.cities)

  const city = newArray.find((city) => city.id == cityId);
  
  console.log(cityId) //logs the correct cityId
  console.log(cities) 
  console.log(newArray) 
  console.log(city.title)

  if (!city) {
    return (
      <div className='text-6xl flex flex-col items-center justify-center'>
        <p>City not found</p>
      </div>
    )
  }

  return (
    <div className='text-6xl flex flex-col items-center justify-center'>
      {/* <p>City id: {cityId}</p> */}
      {/* <p>City title: {city.title}</p> */}
      <p>{city.title}</p>
    </div>
  )
}

export default CityDetailsPage