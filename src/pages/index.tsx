import type { NextPage } from 'next'
import Head from 'next/head'

import { Main } from '../components/Main';
import { SideBar } from '../components/SideBar';
import { About } from '../components/About';
import {Container} from '../styles/pages';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dual Pixel Perfection Studio</title>
      </Head>
      
      <SideBar />
      <Main />
      <About />

    </Container>
  )
}

export default Home
