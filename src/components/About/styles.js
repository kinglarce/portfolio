import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const Parameter = styled.h6`
  color: ${colors.introText};
  font-size: ${fontSizes.xxlarge};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin: 0 !important;
  // ${media.desktop`font-size: ${fontSizes.xxlarge};`};
  ${media.tablet`font-size: ${fontSizes.large};`};
`;

export { AboutContainer, FlexContainer, ContentContainer, Parameter };
