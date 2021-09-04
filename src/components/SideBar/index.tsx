import Image from 'next/image';
import React from 'react';

import { Container, Navigation, SideBars } from './styles';
import Logo from '../../../public/assets/logo.svg';

export const SideBar: React.FC = () => {
  return (
    <SideBars>
      <Container>
        <Image src={Logo} alt="Dual Pixel Perfection" height={95} />

        <Navigation>
          <a>JOGOS</a>
          <a>SOBRE NOS</a>
          <a>CONTADO</a>
          <a href="https://discord.gg/dmA5uY7d" >DISCORD</a>
        </Navigation>
      </Container>
    </SideBars>
  )
}