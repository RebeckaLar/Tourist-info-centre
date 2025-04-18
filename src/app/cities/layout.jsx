import React from 'react'

function CitiesLayout({ children }) {
  return (
    <div>
        { children }
        <div className='grid grid-cols-3 gap-4'>
            <div className="border p-4">
                Ruta1
            </div>
            <div className="border p-4">
                Ruta2
            </div>
            <div className="border p-4">
                Ruta3
            </div>
        </div>
    </div>
  )
}

export default CitiesLayout