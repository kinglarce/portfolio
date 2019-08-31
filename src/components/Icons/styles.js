import styled from 'styled-components';
import { media } from '@styles';

const IconAnimatedContainer = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  svg {
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
    stroke: currentColor;
  }
  ${media.desktop`
    position: relative;
    left: 0;
    top: 0;
    svg {
      width: 18px;
      height: 18px;
    }
  `};
`;

const IconContainer = styled.div`
  svg {
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
  }
  span {
    margin-left: 10px;
  }
`;

export { IconAnimatedContainer, IconContainer };
