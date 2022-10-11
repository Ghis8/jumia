import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/layout.module.css'
const Layout = ({children}) => {
  return (
    <>
    <div className={styles.container}>
        <Navbar/>
        <hr/>
        {children}
        
        
    </div>
    <Footer className={styles.footer}/>
    </>
  )
}

export default Layout