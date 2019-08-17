import styled from 'styled-components';
import Theme from '../theme';

const { colors, fontSizes, fonts } = Theme;

const Button = styled.button`
  color: ${colors.green};
  background-color: transparent;
  border: 1px solid ${colors.green};
  border-radius: ${Theme.borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${Theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.transGreen};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
