import Image from 'next/image';
import React from 'react';

import { Container, Navigation, SideBars } from './styles';
import Logo from '../../../public/assets/logo.png';

export const SideBar: React.FC = () => {
  return (
    <SideBars>
      <Container>
        <Image
          src={Logo} alt="Dual Pixel Perfection"
          width={160}
          height={90}
        />

        <Navigation>
          <li>
            <a>JOGOS</a>
          </li>
          <li>
            <a>SOBRE NOS</a>
          </li>
          <li>
            <a>LOJA</a>
          </li>
        </Navigation>
      </Container>
    </SideBars>
  )
}