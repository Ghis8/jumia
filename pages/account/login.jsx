import React from 'react'
import styles from '../../styles/login.module.css'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import Link from 'next/link'
const login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.link}>
            <Link href='/'>Home</Link>
            <span>&gt;</span>
            <span>Log in</span>
        </div>
        <hr/>
        <div className={styles.container}>
            <h2>One Account ALl services</h2>
            <span>Now with one account you can access all services</span>
            <div className={styles.data}>
                <h3>Log In</h3>
                <input type='text' placeholder='Your Email Address' />
                <input type="password" placeholder='Your Password' />
                <AiFillEye className={styles.show}/>
            </div>
        </div>
    </div>
  )
}

export default login 