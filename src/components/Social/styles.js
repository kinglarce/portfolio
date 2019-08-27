import styled from 'styled-components';
import { theme, media } from '@styles';

const { colors } = theme;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${colors.socialMedia};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.socialMedia};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled.a`
  padding: 10px;
  color: ${colors.socialMedia};
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

export { SocialContainer, SocialItemList, SocialItem, SocialLink };
