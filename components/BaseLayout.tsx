import React, { ReactElement } from 'react'
import Menu from './Menu'

import styles from './baseLayout.module.css'

type BaseLayoutProps = {
    children: ReactElement
}

const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <>
        <nav className={styles.side}>
          <Menu />
        </nav>
        <main>
            {children}
        </main>
    </>
  )
}

export default BaseLayout