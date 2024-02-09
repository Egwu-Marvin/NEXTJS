import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import { FaPen } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { HiOutlineStar } from "react-icons/hi2";
import { IoDocumentOutline } from "react-icons/io5";
import { MdAccessAlarm } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import styles from './header.module.css'



export default function Header() {
  return (

    <div className='bg-gray-500 h-screen'>

    <div className='flex space-x-2 items-center'>
        <Link href= '/'>
      <RxHamburgerMenu />
      </Link>
      
      <Link href= '/'>
      <Image src = '/gmailComplete.png' alt = "gmail" width={70} height={80}  />
      </Link>
    </div>

    <nav>
        <ul className={styles.header}>
            <Navbar title = "compose" icon = {FaPen} />
            <Navbar title = "inbox"  icon = {BiSolidInbox}/>
            <Navbar title = "starred"  icon = {HiOutlineStar}/>
            <Navbar title = "snoozed" icon = {MdAccessAlarm}/>
            <Navbar title = "sent" icon = {GoPaperAirplane}/>
            <Navbar title = "draft" icon = {IoDocumentOutline} />
            {/* <Navbar title = "more" /> */}
        </ul>
    </nav>
    </div>
  )
}
