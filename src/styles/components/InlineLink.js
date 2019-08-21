import styled from 'styled-components';
import theme from '@styles/theme';

const { colors } = theme;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${colors.dark};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.dark};
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
    background-color: ${colors.dark};
    transition: ${theme.transition};
  }
`;

export default InlineLink;
