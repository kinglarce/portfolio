import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Intro = styled.h1`
  color: ${colors.introText};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.large};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.large};`};
  ${media.tablet`font-size: ${fontSizes.medium};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const Subtitle = styled.h3`
  ${mixins.flexStart};
  font-size: ${fontSizes.h3};
  font-family: ${fonts.SFMono};
  line-height: 1.1;
  color: ${colors.subtitle};
  ${media.desktop`font-size: ${fontSizes.h3};`};
  ${media.tablet`font-size: ${fontSizes.xxlarge};`};
  ${media.phablet`font-size: ${fontSizes.xlarge};`};
  ${media.phone`font-size: ${fontSizes.large};`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

export { HeroContainer, Intro, Name, Subtitle, Blurb, EmailLink };
