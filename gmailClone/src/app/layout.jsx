import { Inconsolata } from 'next/font/google'
import './globals.css'
import CompleteHeader from './components/CompleteHeader'

const lata = Inconsolata({ 
  subsets: ['latin'],
weight: [ '400']})

export const metadata = {
  title: 'gmail clone',
  description: 'User interface of Gmail clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lata.className}>
        <div className='grid grid-cols-[1fr_3fr] gap-6'>

        <CompleteHeader />
        {children}
        </div>
        </body>
    </html>
  )
}
