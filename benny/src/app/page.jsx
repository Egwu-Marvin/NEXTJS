import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <div>
      <h1 className='bg-yellow-600 flex justify-center font-bold text-4xl' >Javascript has dealt with me</h1>
      </div>
      
      <div>
        <p className='flex justify-center font-bold text-xl text-black pt-3'>Ways in which Javascript has dealt with me</p>
        <div className='flex pl-9 font-bold'>

            <ol>
              <li>sleepless night</li>
              <li>damaged my laptop</li>
              <li>syntax error</li>
            </ol>
        </div>

        <div className='flex col-span-2 p-5 justify-center'>
           
           
            <Image src = '/fruitfulness.jpg' alt = "Basket full of fruits" height ={600} width={300} />

            <Image src= '/deesh-pack.jpg' alt="Take away pack" height={400} width={400}/>
          </div>

      </div>
    </div>
  )
}
