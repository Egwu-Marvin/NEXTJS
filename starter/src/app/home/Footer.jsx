import React from 'react'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='flex justify-center h-6 text-white bg-red-900 '>copyright &copy;{year}</footer>
  )
}
