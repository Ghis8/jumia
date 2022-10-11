import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jumia DRC</title>
        <meta name="description" content="" />
        <link rel="icon" href="/images/icon.png" />
        <link rel="stylesheet" href="../css/output.css" />
      </Head>
      <Feed/>

    </div>
  )
}
