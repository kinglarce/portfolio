import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.footerBackground};
  color: ${colors.footerText};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.socialMedia};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  color: ${colors.socialMedia};
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

export { FooterContainer, SocialContainer, SocialItemList, SocialLink, Copy };
