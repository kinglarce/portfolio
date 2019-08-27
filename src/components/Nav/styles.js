import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  right: 0;
  padding: 0px 50px;
  background-color: ${colors.navBackground};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: none;
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const Navbar = styled.nav`
  ${mixins.flexEnd};
  position: relative;
  width: 100%;
  color: ${colors.navLinks};
  font-family: ${fonts.SFMono};
  z-index: 12;
`;
const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const HamburgerInner = styled.div`
  background-color: ${colors.mobileNavHamburger};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.mobileNavHamburger};
    position: absolute;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    left: 0;
    right: auto;
    width: ${props => (props.menuOpen ? `100%` : `60%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    left: auto;
    right: 0;
    width: ${props => (props.menuOpen ? `100%` : `60%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smallish};
`;
const NavLink = styled(AnchorLink)`
  margin: 0 10px;
  padding: 15px 20px;
  color: ${colors.navLinks};
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.navLinks};
    content: '';
    transition: top 0.3s;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    background: ${colors.navLinks};
    content: '';
    transition: height 0.3s;
  }

  &:hover:before {
    top: 100%;
    opacity: 1;
  }

  &:hover:after {
    height: 100%;
  }
`;

export {
  NavContainer,
  Navbar,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  NavLinks,
  NavList,
  NavListItem,
  NavLink
};
