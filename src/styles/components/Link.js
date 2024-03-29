import styled from 'styled-components';
import theme from '@styles/theme';

const { colors } = theme;

const NormalLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${colors.links};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.hoverLinks};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
`;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${colors.links};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.hoverLinks};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.pseudoElem};
    transition: ${theme.transition};
  }
`;

export { NormalLink, InlineLink };
