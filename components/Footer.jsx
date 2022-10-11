import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <span>JUMIA <Image src="/images/icon1.png" width="35" height="20" alt="icon"/></span>
            <span>Copyright 2022 &copy; jumia.cd</span>
            
        </div>
        <div className={styles.right}>
            <div>
                <div>
                    <span>How to</span>
                    <Link href="">how to sell fast</Link>
                    <Link href="">safety tips</Link>
                    <Link href="">how it works</Link>
                </div>
                <div>
                    <span>Help</span>
                    <Link href="">FAQ</Link>
                    <Link href="">contact us</Link>
                    <Link href="">term of use</Link>
                    <Link href="">privacy policy</Link>
                </div>
            </div>
            <div>
                <span>cars to sell</span>
                <Link href="">Toyota</Link>
                <Link href="">BMW</Link>
                <Link href="">Mercedes</Link>
                <Link href="">Peugot</Link>
                <Link href="">Honda</Link>
                <Link href="">Kia</Link>
                <Link href="">Nissan</Link>
            </div>
            <div>
                <span>Phones to Sell</span>
                <Link href="">Samsungs</Link>
                <Link href="">Iphones</Link>
                <Link href="">Alcatel</Link>
                <Link href="">Blackberry</Link>
                <Link href="">HTC</Link>
                <Link href="">LG</Link>
                <Link href="">Sony</Link>
            </div>
            <div>
                <span>Classified in DRC</span>
                <Link href="">Property</Link>
                <Link href="">Appartment</Link>
                <Link href="">Houses and Villas</Link>
                <Link href="">Offices and Shops</Link>
                <Link href="">Land</Link>
                <Link href="">Jobs</Link>
                <Link href="">Furniture</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer