import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FruitCart({fruits}) {
  const fruitsDisplay = fruits.map((fruit,index) => (
    <section key = {index} className='py-4 mx-auto rounded-3xl-md border- border-r-70 hover:shadow-lg w-60 mt-7 xd' >
      <Link href = {`/fruits/${fruit.name.split(' ').join('-')}`}>
      <Image src = {`https://robohash.org/${fruit.name}`} alt = {fruit.name} 
      width =  {170} height = {170} />
      <h2 className='flex justify-center bg-red-900'>{fruit.name}</h2>
      <p className='flex justify-center bg-red-900'>₦{fruit.price}</p>
      </Link>

    </section>
  
  ))
  return (
    <div className='grid grid-cols-4'>
      {fruitsDisplay}
    </div>
  )
}
