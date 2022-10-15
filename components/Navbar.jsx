import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineUserAdd,AiOutlineMenu} from 'react-icons/ai'
import {useRouter} from 'next/router'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    const router=useRouter()
    const handleAccount=()=>{
        router.push('/account/login')
    }
  return (
    <div className={styles.container}>
        <AiOutlineMenu className={styles.menuIcon}/>
        <div className={styles.left}>
            <div className={styles.titleName}>
                <h1 className={styles.change}>JUMIA</h1>
                <Image src="/images/icon1.png" width="40" height="20" alt="icon" />
            </div>
            <div className={styles.adLinks}>
                <Link href="">All Ads</Link>
                <Link href="">Help</Link>
                <button className={styles.btn}>French</button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.account}>
                <div onClick={handleAccount}>
                    <AiOutlineUserAdd className={styles.user}/>
                    <span>My Account</span>
                </div>
                {
                    toggle && 
                    <div>
                        <button>Log in</button>
                        <Link href="">Post Ad</Link>
                        <Link href="">Favorite (0)</Link>
                        <Link href=''>Create Account</Link>
                        <hr/>
                        <Link href=''>Forgot Password ?</Link>
                    </div>
                }
               
            </div>
            <button onClick={()=>router.push('/posts/new')} className={styles.btn}>post free ad</button>
        </div>
    </div>
  )
}

export default Navbar