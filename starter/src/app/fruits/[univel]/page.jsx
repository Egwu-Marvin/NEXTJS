import React from 'react'
import { fruits } from '../page'
import Image from 'next/image'
import Link from 'next/link'


export default function page({params}) {
    const fruitCard = fruits.find(fruit => fruit.name.split(' ').join('-') == params.univel)
    
    const relatedFruits = fruits.filter(fruit => (fruit.type == fruitCard.type) && (fruit.name !== fruitCard.name)).slice(0,3)

    // const relatedFruits = fruits.sort((a,b) => b.price - a.price).slice(0,3)
    
    const relatedCategory = relatedFruits.map((fruit,index) => (
      <section key = {index} className='mx-auto w-30 py-7 rounded-3xl-md border-r-70 hover:shadow-lg mt-7 '>
        <Link href = {`/fruits/${fruit.name.split(' ').join('-')}`}>
        <Image src = {`https://robohash.org/${fruit.name}`} alt = {fruit.name} 
        width =  {170} height = {170} />
        <h2 className='flex justify-center bg-red-900'>{fruit.name}</h2>
        <p className='flex justify-center bg-red-900'>₦{fruit.price}</p>
        </Link>
      </section>
    
    ))
  return (
    <div className='text-red-50'>
      
      <h2 className='text-2xl text-center'>
        <span className='font-bold'>Name:</span> {fruitCard.name}
      </h2>

      <h2 className='text-2xl text-center'> 
        <span className='font-bold'>
        Price:
      </span> {fruitCard.price} 
      </h2>
      
      <h2 className='text-xl text-center'>
        <span className='text-2xl font-bold'>Type: </span>
         {fruitCard.type}
      </h2>
      
      <h2 className='text-xl text-center'>
        <span className='text-3xl font-bold'>Description:</span> {fruitCard.description}
      </h2>
      
      
      <div className='flex justify-center py-6 text-center'>  
      <h2><span className='text-3xl font-bold'>Visual Of The Fruit</span> <div className='animate-pulse'>{fruitCard.visual}</div></h2>
      </div>

      <div>
        {relatedCategory}
      </div>

      {/* <div>
        <audio src="/sound/KING OGENWANNE-SWEETIE MAINTAIN.mp3">Trying out audio stuffs</audio>
      </div> */}

      {/* <div>
        <Image src='/imgs/banana.jpeg' alt="Illumine laptopBack" width={600} height={800}/>
      </div> */}

      
    </div>
  )
}
