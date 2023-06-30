import Link from 'next/link'
import React from 'react'
import {FaPlayCircle} from "react-icons/fa"
import styles from "./styles.module.css"

const Header = () => {
  return (
    <header  className = {
        `${styles.header} container fluid`
    } >
        <div className = {
            styles.heaederWrapper
        } >
            <Link Link href = "/"
            className = {
                styles.logo
            } >
                < FaPlayCircle/> NEXTFILMS
            </Link>
            <nav className = {
                styles.navigationMenu
            } >
                <Link href="/">Movies</Link>
                <Link href="/">Series</Link>
                <Link href="/">Kids</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header