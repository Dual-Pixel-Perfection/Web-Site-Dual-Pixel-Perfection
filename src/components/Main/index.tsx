import Image from 'next/image';
import React from 'react';
import { Container, Description } from './styles';
import GifLogo from '../../../public/assets/gif_dual_pixel_perfection.gif';

export const Main: React.FC = () => {
  return (
    <Container>
      <Image
        src={GifLogo}
        width={1280}
        height={720}
      />
      <Description>
        <h1>
          DUAL PIXEL PERFECTION
        </h1>
        <p>
          Mini empresa de criação de games 2D criada para tornar sonhos em realidade usando a mágica para programação de jogos.
          Juntos nós podemos criar o que vier em nossas mentes. Com esse objetivo a Dual Pixel Perfection atua para dar vida a suas pixel arts
        </p>
      </Description>
    </Container>
  );
}