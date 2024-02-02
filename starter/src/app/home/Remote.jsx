import Image from 'next/image'
import React from 'react'

export default function Remote() {
  return (
    <div className='flex'>
        <Image src='https://images.unsplash.com/photo-1610780757769-d46802dc2675?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='a lady in a forest' width='500' height='400' className='h-[400px]'/>

        <Image src='https://i.pinimg.com/564x/0a/77/78/0a777876b73ae120809cf8ef2694a4fe.jpg'
        alt='a lady in a forest' width='500' height='0' className='h-[400px]'/>
    </div>
  )
}
