// import React from 'react'
import Image from "next/image"

export default function Gallery() {
  return (
    <div className="grid items-center justify-center p-5">
      <h1 className="text-5xl font-bold text-center text-red-900 ">Trying Gallery</h1>

      <div>
            <Image src='/imgs/illumineLogo.png' alt="Illumine Logo" width={600} height={600}/>
        </div>
        

        <div>
            <Image src='/imgs/illumine4.jpg' alt="Illumine Logo" width={600} height={600}/>
        </div>

        <div>
            <Image src='/imgs/illumineHome1.jpg' alt="Illumine Logo" width={600} height={600}/>
        </div>

    </div>
  )
}
