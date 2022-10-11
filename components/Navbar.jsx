import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {useRouter} from 'next/router'

const Navbar = () => {
    const router=useRouter()
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div>
                <h1 className={styles.change}>JUMIA</h1>
                <Image src="/images/icon1.png" width="40" height="20" alt="icon" />
            </div>
            <div>
                <Link href="">All Ads</Link>
                <Link href="">Help</Link>
                <button className={styles.btn}>French</button>
            </div>
        </div>
        <div className={styles.right}>
            <div>
                <AiOutlineUserAdd className={styles.user}/>
                <span>My Account</span>
            </div>
            <button onClick={()=>router.push('/posts/new')} className={styles.btn}>post free ad</button>
        </div>
    </div>
  )
}

export default Navbar