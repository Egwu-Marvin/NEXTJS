import React from 'react'

export default function Navbar({title, icon: Icon}) {
  return (
    <div>
      <li className='flex space-x-2 items-center'>
        <Icon />
        <span>{title}</span>
      </li>
    </div>
  )
}
