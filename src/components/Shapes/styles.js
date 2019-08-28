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

const sizes = {
  auto: 'auto',
  px: '1px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '48': '12rem',
  '64': '16rem',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
  full: '100%',
  screen: '100vw'
};

export { ShapeContainer, sizes };
