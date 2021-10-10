import React from 'react';
import Image from 'next/image';

import Logo from '../../../public/assets/logo.png';
import DiscordLogo from '../../../public/assets/discord_logo.svg';
import GithubLogo from '../../../public/assets/github_logo.svg';
import InstagramLogo from '../../../public/assets/instagram_logo.svg';
import TwitterLogo from '../../../public/assets/twitter_logo.svg';
import { Header, Contact, Container, PropSite, SocialMedia, SocialCard } from './styles';

export const Footer: React.FC  = () => {
  return (
    <Container>
      <SocialCard>
        <Header>
          <Image width={320} height={180} src={Logo} alt="Dual Pixel Perfection" />
        </Header>
        <SocialMedia>
          <h2>Redes sociais</h2>

          <div>
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
          </div>
        </SocialMedia>

        <Contact>
          <h2>Contato da empresa</h2>
          <p>+55 31 9642-0288</p>
          <p>dualpixelperfection@gmail.com</p>
        </Contact>
      </SocialCard>

      <PropSite>
        <p>© 2021 Dual Pixel Perfect Studio</p>
      </PropSite>
    </Container>
  );
}