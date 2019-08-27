import React from 'react';
import Icons from '@components/Icons';
import { socialMedia } from '@config';
import { FooterContainer, SocialContainer, SocialItemList, SocialLink, Copy } from './styles';

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }) => (
            <li key={name}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <Icons name={name} />
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy />
  </FooterContainer>
);

export default Footer;
