import Image from "next/image"

const greetMe = 'Welcome to '
const Illumine = 'Illumine Business Hub'

export default function Main() {
  return (
    <div className="grid grid-cols-3 mt-10">

<div  className="flex flex-col items-center justify-center text-3xl text-center text-white bg-red-900 m-7">
        <h2>Good morning, {greetMe}</h2>
        <h1>fundamentals of React.JS by <br /> {Illumine}</h1>
        </div>
        
       
        <div>
            <Image src='/imgs/illumineLogo.png' alt="Illumine Logo" width={600} height={600}/>
        </div>

        <div>
            <Image src='/imgs/illumineHome.jpg' alt="Illumine Front View1" width={600} height={500}/>
        </div>
    
    </div>
  )
}
