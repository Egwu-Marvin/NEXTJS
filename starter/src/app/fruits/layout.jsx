import React from 'react'
import FruitNav from './FruitNav'

export default function layout({children}) {
  return (
    <div className='text-white'>
        <nav>
            <ul className='flex justify-between py-3 mx-3 font-bold bg-red-950 animate-pulse'>
                <FruitNav title='Tropical Fruits'/>
                <FruitNav title='Core'/>
                <FruitNav title='Berries'/>
                <FruitNav title='Citrus Fruits'/>
                <FruitNav title='Melons'/>
                <FruitNav title='Pits'/>
            </ul>
        </nav>
      {children}
    </div>
  )
}
