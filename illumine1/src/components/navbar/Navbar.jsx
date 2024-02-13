import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function Navbar() {
  return (
    <div className = "flex items-center justify-between h-28 align">
      <div><Image src = '/img/illumine-transperent.png' alt="illumine logo" width={150} height={150}/></div>
      <div>
        <ul className="flex gap-4" id='links'> 
        <Link href = "/">Home</Link>
        <Link href = "/about">About</Link>
        <Link href = "/contact">Contact</Link>
        <Link href = "/blog">Blog</Link>
        <Link href = "/admin">Admin</Link>
        </ul>
      </div>
        
    </div>
  )
}
