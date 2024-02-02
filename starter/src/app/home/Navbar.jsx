import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between h-10 px-4 text-white bg-red-900">
            <Link href='/'><li>Home </li></Link>
            <Link href='/about'><li>About </li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            <Link href='/gallery'><li>Gallery</li></Link>
        </ul>
    </nav>
  )
}
