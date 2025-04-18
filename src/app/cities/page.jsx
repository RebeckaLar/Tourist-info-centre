import React from 'react'
import Link from 'next/link'
import { promises as fs } from 'fs';

 
async function CitiesPage() {
    const file = await fs.readFile(process.cwd() + '/public/cities.json', 'utf8');
    const cities = JSON.parse(file);    
    const newArray = Array.from(cities.cities)

    // console.log(newArray)
  
  return (
      <ul className='p-2 text-white grid grid-cols-3 gap-7 justify-content'>
        {newArray.map((city) => (
          <li key={city.id}>
          <Link href={`cities/${city.id}`} className=''>
            <div className="p-5 h-full rounded-xl bg-component btn-hover transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <h3 className='text-lg text-center'>{city.title}</h3>
              {city.content}
            </div>
            </Link>
          </li>
        ))}
    </ul>
  )
}
export default CitiesPage