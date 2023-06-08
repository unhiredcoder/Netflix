import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="#"
                        >Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="component/about"
                        >About</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink}
                            href="component/movie">Movie</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink}
                            href="component/contact">Contact</Link>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}

export default Nav