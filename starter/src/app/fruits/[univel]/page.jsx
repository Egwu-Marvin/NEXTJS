import React from 'react'
import { fruits } from '../page'
// import Image from 'next/image'

export default function page({params}) {
    const fruitCard = fruits.find((fruit) => fruit.name.split(' ').join('-') == params.univel)
  return (
    <div className='text-red-50'>
      
      <h2 className='text-center'>
        <span className='font-bold'>Name:</span> {fruitCard.name}
      </h2>

      <h2 className='text-center'> 
        <span className='font-bold'>
        Price:
      </span> {fruitCard.price} 
      </h2>
      
      <h2 className='text-center'>
        <span className='font-bold'>Type: </span>
         {fruitCard.type}
      </h2>
      
      <h2 className='text-center'>
        <span className='font-bold'>Description</span> {fruitCard.description}
      </h2>
      
      <h2>
        <span className='text-3xl font-bold'>Visual Of The Fruit</span> {fruitCard.visual}
      </h2>

      {/* <div>
        <Image src='/imgs/banana.jpeg' alt="Illumine laptopBack" width={600} height={800}/>
      </div> */}

      
    </div>
  )
}
