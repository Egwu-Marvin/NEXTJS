import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div>
      <h1>Page is not in existance</h1>
      <p>Return home</p>
      <Link href="/">Goto Homepage</Link>
    </div>
  )
}
