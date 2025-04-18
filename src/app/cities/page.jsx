import React from 'react'
import Link from 'next/link'
import { promises as fs } from 'fs';
 
async function CitiesPage() {
    const file = await fs.readFile(process.cwd() + '/public/cities.json', 'utf8');
    const cities = JSON.parse(file);    
    const newArray = Array.from(cities.cities)

    console.log(newArray)
  
  return (
        <ul className='mx-10 p-2 justify-center'>
        {newArray.map((city) => (
          <li key={city.id}>
              <Link href={`cities/${city.id}`}>{city.title}</Link>
              </li>
        ))}
      </ul>
  )
}
export default CitiesPage