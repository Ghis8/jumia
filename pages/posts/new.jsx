import Link from 'next/link'
import { categories, province } from '../../components/data'
import styles from '../../styles/newPost.module.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const New = () => {
const [phone, setPhone]=useState()
console.log(phone)
  return (
    <div className={styles.newPost}>
        <div className={styles.link}>
            <Link href='/'>Home</Link>
            <span>&gt;</span>
            <span>Post Ad</span>
        </div>
        <hr/>
        <div className={styles.ad}>
            <div className={styles.adDetails}>
                <div >
                    <h3>Choose your category and location</h3>
                    <div className={styles.adCateg}>
                        <div className={styles.selectCateg}>
                            
                            <label>Province*</label>
                            <select name="province" className={styles.select}>
                                <option value="">Select Province</option>
                                {
                                    province.map((p)=>(
                                        <option value={p}>{p}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={styles.selectCateg}>
                            <label>Category*</label>
                            <select name="category" className={styles.select}>
                                <option value="">Select Category</option>
                                {
                                    categories.map((c)=>(
                                        <option value={c.title}>{c.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.adDetail}>
                        <h3>Ad Details</h3>
                        <div className={styles.detailsTitle}>
                            <label>Title*</label>
                            <input type="text" placeholder='Title' />
                        </div>
                        <div className={styles.detailsDesc}>
                            <label>Description*</label>
                            <textarea name="desc" id="" cols="30" rows="10" placeholder='Enter more details so buyer can learn more about your post'/>
                        </div>
                        <div className={styles.detailsPrice}>
                            <label>Price*</label>
                            <input type='text' placeholder='Price'/>
                        </div>
                        <div className={styles.detailsImg}>
                            <label>Image</label>
                            <input type="file" />
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.aboutYou}>
                        <h3>About You</h3>
                        <div className={styles.detailsTitle}>
                            <label>Mail*</label>
                            <input type="email" placeholder='Enter Mail' />
                        </div>
                            
                        <div className={styles.detailsTitle}>
                            <label>Password*</label>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className={styles.detailsTitle}>
                            <label>Name*</label>
                            <input type="Text" placeholder='Names' />
                        </div>
                        <div className={styles.detailsPhone}>
                            <div className={styles.phone}>
                                <label>Phone*</label>
                                <PhoneInput
                                placeholder="Enter phone Number"
                                value={phone}
                                onChange={setPhone}
                                />
                                <AiOutlineWhatsApp className={styles.wIcon}/>

                            </div>
                            <div className={styles.whatsapp}>
                                <input type="checkbox" className={styles.checkbox}/>
                                <span>Works with whatsapp</span>
                            </div>
                        </div>

                    </div>
                    

                </div>
                <div className={styles.rules}>
                    <span>rules to post an Add on Jumia</span>
                    <ul>
                        <li>Do not post the same ads multiple times</li>
                        <li>Do not put your contact details (phone, email or website url) in the description or photo</li>
                        <li>Do not write the price in the title</li>
                        <li>Do not sell or offer forbidden goods and services</li>
                    </ul>
                </div>
            </div>
            <div className={styles.sellerDetails}>

            </div>
        </div>
     
    </div>
  )
}

export default New
