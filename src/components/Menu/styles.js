import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenterStart};
  flex-direction: initial;
  background-color: ${colors.mobileNavBackground};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  box-shadow: -10px 0px 30px -15px ${colors.boxShadow};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const SidebarBackground = styled.div`
  ${mixins.flexCenter};
  flex-direction: initial;
  background-color: ${colors.mobileNavTopBackground};
  padding: 50px;
  width: 50vw;
  height: 20%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  // box-shadow: -10px 0px 30px -15px ${colors.boxShadow};
  ${media.thone`padding: 25px`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 15px;`};
  &:before {
    content: '';
    color: ${colors.bullets};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.large};
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.medium};
  `};
  ${media.tiny`font-size: ${fontSizes.smallish};`};
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;

export { MenuContainer, Sidebar, SidebarBackground, NavLinks, NavList, NavListItem, NavLink };
