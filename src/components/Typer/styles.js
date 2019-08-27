import styled from 'styled-components';
import { theme, media } from '@styles';

const { colors, fontSizes } = theme;

const Cursor = styled.span`
  font-size: ${fontSizes.h3};
  line-height: 1.1;
  color: ${colors.cursor};
  ${media.desktop`font-size: ${fontSizes.h3};`};
  ${media.tablet`font-size: ${fontSizes.xxlarge};`};
  ${media.phablet`font-size: ${fontSizes.xlarge};`};
  ${media.phone`font-size: ${fontSizes.large};`};
  animation: 1s blink step-end infinite;
`;

const TyperContainer = styled.div`
  margin-left: 10px;
`;

export { Cursor, TyperContainer };
