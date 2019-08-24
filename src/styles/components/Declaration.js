import styled from 'styled-components';
import theme from '@styles/theme';
import media from '@styles/media';

const { colors, fontSizes, fonts } = theme;

const Declaration = styled.div`
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
  &:before {
    content: 'const ';
    color: ${colors.variableDeclaration};
  }
  &:after {
    content: ' =';
    color: ${colors.variableDeclaration};
  }
`;

export default Declaration;
