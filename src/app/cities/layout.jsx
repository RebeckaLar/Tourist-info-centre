import React from 'react'


function CitiesLayout({ children }) {
  return (
    <div>
        { children }
        <div className='grid grid-cols-3 gap-4'>
            <div className="border p-4">
                City
            </div>
            <div className="border p-4">
                City
            </div>
            <div className="border p-4">
                City
            </div>
        </div>
    </div>
  )
}

export default CitiesLayout