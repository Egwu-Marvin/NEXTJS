import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="justify-center flex-auto text-3xl">
      
      
        <ul className="flex justify-between h-10 px-4 text-white bg-red-900">
      <Image src= "/imgs/illumineLogo.png" alt="" width={100} height={100}/>
            <Link href='/'><li>Home </li></Link>
            <Link href='/about'><li>About </li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            <Link href='/gallery'><li>Gallery</li></Link>
            <Link href='/fruits'><li>Fruits</li></Link>
        </ul>
    </nav>

    
  )
}
