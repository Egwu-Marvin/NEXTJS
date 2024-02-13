import React from 'react'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='flex justify-center h-12 text-2xl text-white bg-red-900'>copyright &copy;{year}</footer>
  )
}
