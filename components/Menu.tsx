import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from "./menu.module.css"

const Menu = () => {
  return (
    <nav className={styles.topnav}>
        <Link href={"/"} className={styles.logo}>
            <Image
                src="/images/localib-logo.png"
                alt="Localib"
                width={128}
                height={128}
            />
        </Link>
        <button className={styles.button}>Connexion</button>
        <Link href="/about" className={styles.link}>A propos</Link>
        <Link href="/locations" className={styles.link}>Locations</Link>
        <Link href="/vehicules" className={styles.link}>Véhicules</Link>
    </nav>
  )
}

export default Menu