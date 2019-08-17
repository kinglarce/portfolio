import styled from 'styled-components';
import Theme from '../theme';

const { colors } = Theme;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${Theme.transition};
  cursor: pointer;
  color: ${colors.green};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.green};
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
    background-color: ${colors.green};
    transition: ${Theme.transition};
  }
`;

export default InlineLink;
