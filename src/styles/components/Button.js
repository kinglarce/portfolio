import styled from 'styled-components';
import theme from '@styles/theme';

const { colors, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${colors.buttons};
  background-color: transparent;
  border: 1px solid ${colors.buttons};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.hoverButtons};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
