import React from 'react'
import { CitiesNav } from './_components/citiesNav';

async function CitiesLayout({ children }) {
return (
      <div className='container justify-self-center'>    
        <CitiesNav />
        {children}
      </div>
  )
}

export default CitiesLayout