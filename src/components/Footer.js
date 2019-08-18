import React from 'react';
import styled from 'styled-components';
import { IconGithub, IconLinkedin, IconInstagram, IconFacebook } from '@components/Icons';
import { socialMedia } from '@config';

import { theme, mixins, mediaQuery } from '@styles';

const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${mediaQuery.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;

const Icons = {
  Github: <IconGithub />,
  Linkedin: <IconLinkedin />,
  Instagram: <IconInstagram />,
  Facebook: <IconFacebook />
};

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
                {name ? Icons[name] : <IconGithub />}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy />
  </FooterContainer>
);

export default Footer;
