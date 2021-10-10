import Image from 'next/image';
import React from 'react';
import WarningIcon from '../../../public/assets/warning-icon.svg';
import { Container, Header, GamesDashBoard, SectionGame1, SectionGame2, SectionGame3, SectionGame4, Info } from './styles';

export const Games: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>JOGOS</h1>
      </Header>
      {
      //  <GamesDashBoard>
      //  <SectionGame1 >Game</SectionGame1>
      //  <SectionGame2 >Game</SectionGame2>
      //  <SectionGame3 >Game</SectionGame3>
      //  <SectionGame4 >Game</SectionGame4>
      //  </GamesDashBoard>
      }

      <Info>
        <span> <Image width={48} height={48} src={WarningIcon} alt="warning" /><h1>No saved</h1></span>

        <div>
          <p>Por enquanto não há atualização dos nossos jogos, mas nosso time de desenvolvedores esta trabalhando em novos games</p>
          <p>Em breve teremos novos jogos para toda a comunidade.</p><br/>
          <p>Receba novas atualizações em tempo real no nosso <a href="" >servidor do Discord</a></p>
        </div>
      </Info>
      
    </Container>
  );
};