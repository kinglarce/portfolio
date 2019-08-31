import styled from 'styled-components';

const ShapeContainer = styled.svg`
  position: absolute;
  stroke: currentColor;
  ${props => props.hiddenMobile && `display: hidden`};
  color: ${props => props.stroke};
  width: ${props => props.svgSize};
  height: ${props => props.svgSize};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

export default ShapeContainer;
