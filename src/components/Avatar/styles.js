import styled from 'styled-components';
import Img from 'gatsby-image';
import { theme, mixins, media } from '@styles';

const { colors } = theme;

const AvatarWrapper = styled.div`
  position: relative;
  width: 40%;
  margin-right: 30px;
  ${media.tablet`
    margin: 0 auto 60px;
    width: 60%;
  `};
  ${media.phablet`width: 90%;`};
`;
const AvatarImg = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const HexaMain = styled.div`
  transform: rotate(120deg);
  ${media.phablet`
    transform: inherit;
  `};
`;

const HexaLeft = styled.div`
  ${mixins.transformTransitionEase}
  box-shadow: 0 0 4px;
  transform: rotate(-40deg);
  ${media.phablet`
    transform: inherit;
  `};
`;

const HexiRight = styled.div`
  ${mixins.transformTransitionEase}
  box-shadow: 0 0 4px;
  transform: rotate(-80deg);
  ${media.phablet`
    transform: inherit;
  `};
`;

const AvatarContainer = styled.a`
  width: 100%;
  cursor: default;
  background-color: ${colors.hoverBoxShadow};
  &:hover,
  &:focus {
    ${AvatarImg} {
      filter: none;
      mix-blend-mode: normal;
    }
    ${HexaLeft} {
      transform: rotate(-30deg);
    }
    ${HexiRight} {
      transform: rotate(-90deg);
    }
  }
`;

export { AvatarWrapper, AvatarImg, AvatarContainer, HexaMain, HexaLeft, HexiRight };
