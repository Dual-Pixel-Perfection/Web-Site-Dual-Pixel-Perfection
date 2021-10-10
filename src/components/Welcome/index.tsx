import React from 'react';

import { Header, WelcomeDiv } from './styles';

export const Welcome: React.FC = () => {
  return (
    <WelcomeDiv>
      <Header>
        <h1>Seja bem-vindo a Dual Pixel Perfection Studio</h1>
      </Header>
    </WelcomeDiv>
  );
}