import styled from 'styled-components';

const IconAnimatedContainer = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  svg {
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
    stroke: currentColor;
  }
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
