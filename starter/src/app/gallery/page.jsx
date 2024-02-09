// import React from 'react'
import Image from "next/image"

export default function Gallery() {
  return (
    <div className="grid items-center justify-center p-5">
      <h1 className="text-5xl font-bold text-center text-red-900 ">Trying Gallery</h1>

      <div className="grid grid-cols-3 ">
    
        
        <div className="p-2">
            <Image src='/imgs/illumine4.jpg' alt="Illumine laptopBack" width={600} height={800}/>
        </div>
        
      <div>
            <Image src='/imgs/illumineLogo.png' alt="Illumine Logo" width={800} height={800}/>
        </div>
        
        <div className="p-2">
            <Image src='/imgs/illuminebag.jpg' alt="Illumine bag" width={600} height={600}/>
        </div>


        <div>
            <Image src='/imgs/redBeach.jpg' alt="sunset at beach" width={600} height={600}/>
        </div>
      
        <div className="p-2">
            <Image src='/imgs/illumineHome1.jpg' alt="Illumine frontPage1" width={600} height={600}/>
        </div>
       
        <div className="p-2">
            <Image src='/imgs/redSky.jpg' alt="red sky" width={600} height={600}/>
        </div>
      
      </div>

    </div>
  )
}
