import Image from 'next/image';
import React from 'react';

import { Container, Navigation, SideBars, SocialMedia } from './styles';
import Logo from '../../../public/assets/logo.png';
import DiscordLogo from '../../../public/assets/discord_logo.svg';
import GithubLogo from '../../../public/assets/github_logo.svg';
import InstagramLogo from '../../../public/assets/instagram_logo.svg';
import TwitterLogo from '../../../public/assets/twitter_logo.svg';

export const SideBar: React.FC = () => {
  return (
    <SideBars>
      <Container>
        <Image
          src={Logo}
          width={160}
          height={90}
          alt="Dual Pixel Perfection"
        />

        <Navigation>
          <li>
            <a>JOGOS</a>
          </li>
          <li>
            <a>SOBRE</a>
          </li>
          <li>
            <a>LOJA</a>
          </li>
        </Navigation>
        <SocialMedia>
          <li>
            <a href="#">
              <Image src={DiscordLogo} width={36} height={36} alt="Discord" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={GithubLogo} width={36} height={36} alt="Github"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={InstagramLogo} width={36} height={36} alt="Instagram"/>
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={TwitterLogo} width={36} height={36} alt="Twitter"/>
            </a>
          </li>
        </SocialMedia>
      </Container>
    </SideBars>
  )
}