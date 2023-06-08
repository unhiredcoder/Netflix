import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/navbar.module.css"
import Nav from './Nav'


const header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
            <Image src="/Netflix.png" width={100} height={25}/>
            </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default header