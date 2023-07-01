import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

const Footer
 = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤ by
      <Link href="https://www.linkedin.com/in/yunus-emre-tasci/" target='_blank'>Yunus Emre Taşçı</Link>
    </footer>
  )
}

export default Footer
