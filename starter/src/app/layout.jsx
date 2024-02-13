import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
// import Sidebar from './home/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React fundamentals',
  description: 'Learn to create a react app using a Next framework',
  keywords: 'HTML,CSS,JavaScript, React,Git',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-black' lang="en">
      <body className={inter.className}>

        <Navbar />
        {/* <Sidebar /> */}
        <div className='min-h-[80vh]'>
        {children}
        </div>
        <Footer />

        </body>
    </html>
  )
}
