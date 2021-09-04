import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SideBar } from '../components/SideBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dual Pixel Perfection Studio</title>
        
      </Head>
      
      <SideBar/>

    </div>
  )
}

export default Home
