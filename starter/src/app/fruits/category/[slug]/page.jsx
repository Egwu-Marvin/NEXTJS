import React from 'react'
import { fruits } from '../../page'
import Image from 'next/image'
import Link from 'next/link'

export default function Category({params}) {
    const FruitCart = fruits.filter(fruit => fruit.type.toLowerCase().split(' ').join('-') == params.slug)

    const fruitGroup = FruitCart.map((fruit,index) => (
        <section key = {index} className='mx-auto w-30 py-7 rounded-3xl-md border-r-70 hover:shadow-lg mt-7 '>
          <Link href = {`/fruits/${fruit.name.split(' ').join('-')}`}>
          <Image src = {`/imgs/${fruit.name}.jpeg`} alt = {fruit.name} 
          width =  {170} height = {170} />
          <h2 className='flex justify-center bg-red-900'>{fruit.name}</h2>
          <p className='flex justify-center bg-red-900'>₦{fruit.price}</p>
          </Link>
    
        </section>
      
     ))
  return (
    <div className='grid grid-cols-4'>
      {fruitGroup}
    </div>
  )
}
