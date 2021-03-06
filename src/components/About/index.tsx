import React from 'react';
import Image from 'next/image';

import { AboutDiv, Header, Description,Illustrations, Main } from './styles';
import PixelGif from '../../../public/assets/pixel.gif';
import GameScreen from '../../../public/assets/game-screen.png';

export const About: React.FC  = () => {
  return (
    <AboutDiv>
      <Header>
        <h1 id="sobre" >SOBRE</h1>
      </Header>
      
      <Main>
        <Description>
          <h2>Descrição</h2>

          <p>
            Opa! Fala ae, nós somos a Dual Pixel Perfection Studio, ou se preferir DPP. Um studio indie de criação de jogos feito por brasileiros, nosso time trabalha remotamente para transformar sonhos em realidade utilizando a criação de jogos. Nosso objetivo todos os dias e oferecer para os nossos jogadores, jogos visualmente criativos e deslumbrantes, com grande qualidade técnica, e o mais importante com a diversão garantida a todos os jogadores.
            A Dual Pixel Perfection é construída com muito carinho, dedicação e força de vontade!
          </p>

          <div>
            <Image  src={PixelGif} width={120} height={174} alt="Pixel" />
          </div>
        </Description>

        <Illustrations>
          <div>
            <Image src={GameScreen} alt="Game screen" />
          </div>
        </Illustrations>
      </Main>
    </AboutDiv>
  );
}