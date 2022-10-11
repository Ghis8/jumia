import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineCheck,AiOutlineHeart} from 'react-icons/ai'
import {FaGreaterThan} from 'react-icons/fa'
import React from 'react'
import styles from '../styles/feed.module.css'
import {province,categories,ads} from './data'
import {useRouter} from 'next/router'

const Feed = () => {
  const router=useRouter()
  return (
    <div className={styles.container}>
        <div className={styles.region}>
            <div className={styles.city}>

             <h3>Free Classified in Congo</h3>
                <span>Choose Your Province</span>
                <div className={styles.link}>
                    {
                        province.map((p)=>(
                            <Link href=''>{p}</Link>
                        ))
                    }
                </div>
                <button onClick={()=>router.push('/posts/new')} className={styles.btn}>Post Free Ad Now!</button>
            </div>
            <div className={styles.card}>
                <Image src="/images/Dem-Rep-Congo.png" width='250' height='200' />
            </div>
            <div className={styles.check}>
                <div>
                    <AiOutlineCheck className={styles.check_icon} />
                    <span>Sell everything for free</span>
                </div>
                <div>
                    <AiOutlineCheck className={styles.check_icon}/>
                    <span>Thousand of buyer every day</span>
                </div>
                <div>
                    <AiOutlineCheck className={styles.check_icon}/>
                    <span>Add images in your ad to sell fast</span>
                </div>
                <div className={styles.ads}>
                    <FaGreaterThan className={styles.ad_icon}/> 
                    <Link href=''>See all ads DR Congo</Link>
                </div>
            </div>
        </div>
        <hr/>
        <div styles={styles.categ}>
            <h2>Browser our categories</h2>
            <div className={styles.categories}>
                {
                    categories.map((category)=>(
                        <div className={styles.item}>
                            <Image src={category.image} objectFit="contain" width={100} height={90} />
                            <Link href="">{category.title}</Link>
                            <b>({category.count})</b>
                            <ul>
                               {
                                category.desc.map((d)=>(
                                    <li>{d}</li>
                                ))
                               }
                            </ul>
                            
                            
                        </div>
                    ))
                }
               

            </div>
            
        </div>
        <hr/>
        <div className={styles.recentAds}>
            <div className={styles.adTitle}>
                <span>Most Recent Ads in DRC</span>
                <Link href="">All ads</Link>
            </div>
            
            {
              ads.map((a)=>(
                <div className={styles.adItem}>
                    <Image src={a.img} width={150} objectFit='contain' height={120}/>
                    <div className={styles.itemDesc}>
                        <div className={styles.descLeft}>
                            <h3 className={styles.adItemTitle}>{a.title}</h3>
                            <span>$ {a.amount}</span>
                        </div>
                        <div className={styles.descRight}>
                            <div>
                                <p>{a.desc}</p>
                                <span>{a.date}</span>
                            </div>
                            <AiOutlineHeart className={styles.adIcon}/>
                        </div>
                    </div>
                </div>
              ))  
            }

        </div>
        <div className={styles.selling}>
            <h1>What Do you Have to Sell</h1>
            <span>Sell everything on Jumia</span>
            <button onClick={()=>router.push('/posts/new')} className={styles.btn}>Post Free Ad Now!</button>

        </div>
    </div>
  )
}

export default Feed