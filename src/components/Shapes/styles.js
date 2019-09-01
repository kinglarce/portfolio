import styled from 'styled-components';

const ShapeContainer = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
`;

const ShapeSvg = styled.svg`
  stroke: currentColor;
  color: ${props => props.stroke};
  width: ${props => props.svgSize};
  height: ${props => props.svgSize};
  fill: ${props => props.fill};
`;

export { ShapeContainer, ShapeSvg };
