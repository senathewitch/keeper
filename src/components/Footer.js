import React from 'react'
import styles from './Footer.module.scss'

function Footer() {

    const currentYear = new Date().getFullYear;

  return (
    <div className={styles.footer}>
        Copyright © {currentYear}
    </div>
  )
}

export default Footer