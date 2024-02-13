import React from 'react'

export default function About() {
  return (
    <div className='h-svh'>
      <div className='text-4xl font-bold text-center text-red-900' >
      This is About Page lol
      </div>

      <div className='flex justify-center border pt-7'>
            
            <video src = '/vids/illumineLogo.cur.mp4' alt = "Logo" width={700} height={700} autoPlay loop/>

            
        
            {/* <Image src='/imgs/illumineHome.jpg' alt="Illumine Front View1" width={600} height={500}/> */}
        </div>
      
    </div>
  )
}
