import React from 'react'
import Image from 'next/image'
import styles from "./navbar.module.css"
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Login from '../login/Login'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/linkedin.png" alt="facebook" height={24} width={24}/>
        <Image src="/youtube.png" alt="youtube" height={24} width={24}/>
        <Image src="/instagram.png" alt="instagram" height={24} width={24}/>
      </div>
      <div className={styles.logo}>SecuritySploit</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Login/>
      </div>
    </div>
  )
}

export default Navbar
