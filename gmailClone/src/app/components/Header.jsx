import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";
import { FaPen } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { MdAlarm } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import styles from './header.module.css'




export default function Header() {
  return (

    <div className="h-screen bg-gray-300 ">

        <div className="flex items-center p-8 space-x-1 ">
            <Link href='/'>
            <RxHamburgerMenu className="text-3xl"/>
            </Link>

            <Link href='/'>
            <Image src='/gmail.png' alt="gmail" width={70} height={70}/>
            </Link>
        </div>
        <nav>
            <ul className={styles.header}>
                <Navbar title="compose" icon = {FaPen}/>
                <Navbar title="inbox" icon = {RiInboxFill}/>
                <Navbar title="starred" icon = {FaRegStar}/>
                <Navbar title="snoozed" icon = {MdAlarm}/>
                <Navbar title="sent" icon = {FiSend}/>
                <Navbar title="drafts" icon = {IoDocumentOutline}/>
                
            </ul>
        </nav>
    </div>
  )
}
