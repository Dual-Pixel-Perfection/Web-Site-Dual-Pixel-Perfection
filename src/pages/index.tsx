import type { NextPage } from 'next'
import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import {Container} from '../styles/pages';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dual Pixel Perfection Studio</title>
      </Head>
      
      <SideBar/>

    </Container>
  )
}

export default Home
