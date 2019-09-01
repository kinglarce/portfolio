import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@styles';
import { ShapeContainer, ShapeSvg } from './styles';

const { sizes } = theme;

const Triangle = (
  <polygon
    strokesize="1px"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    points="14.921,2.27 28.667,25.5 1.175,25.5 "
  />
);

const Circle = (
  <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
);

const ArrowUp = (
  <>
    <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
    <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
  </>
);

const UpDown = (
  <>
    <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
    <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
  </>
);

const Box = (
  <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
);

const Hexa = (
  <polygon
    strokeLinejoin="round"
    strokeMiterlimit="10"
    points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
  />
);

const SHAPES = {
  triangle: {
    shape: Triangle,
    viewBox: '0 0 30 30'
  },
  circle: {
    shape: Circle,
    viewBox: '0 0 30 30'
  },
  arrowUp: {
    shape: ArrowUp,
    viewBox: '0 0 30 42'
  },
  upDown: {
    shape: UpDown,
    viewBox: '0 0 30 44.58'
  },
  box: {
    shape: Box,
    viewBox: '0 0 30 30'
  },
  hexa: {
    shape: Hexa,
    viewBox: '0 0 30 30'
  }
};

const Shape = ({ stroke, fill, size, shape, left, top }) => (
  <ShapeContainer left={left} top={top}>
    <ShapeSvg
      viewBox={SHAPES[shape].viewBox}
      stroke={stroke}
      fill={fill}
      svgSize={sizes[`${size}`]}
    >
      {SHAPES[shape].shape}
    </ShapeSvg>
  </ShapeContainer>
);

Shape.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number,
  shape: PropTypes.oneOf(Object.keys(SHAPES)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string
};

Shape.defaultProps = {
  stroke: 'transparent',
  size: 8,
  fill: 'none',
  left: '0%',
  top: '0%'
};

export default Shape;
