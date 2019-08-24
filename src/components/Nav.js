import React, { useEffect, useState, useCallback } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from '@components/Menu';
import { useWindowEvent } from '@utils';
import { navLinks, navHeight } from '@config';
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
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: none;
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.giant`width: 80%;`};
  ${media.bigDesktop`width: 80%;`};
  ${media.desktop`
    padding: 0 40px;
    width: 80%;
  `};
  ${media.tablet`
    width: 100%;
    padding: 0 25px;
  `};
  ${media.thone`width: 100%;`};
  ${media.phablet`width: 100%;`};
  ${media.phone`width: 100%;`};
  ${media.tiny`width: 100%;`};
`;
const Navbar = styled.nav`
  ${mixins.flexEnd};
  position: relative;
  width: 100%;
  color: ${colors.navLinks};
  font-family: ${fonts.SFMono};
  // counter-reset: item 0;
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
  // counter-increment: item 1;
  // &:before {
  //   content: '0' counter(item) '.';
  //   text-align: right;
  //   color: ${colors.pseudoElem};
  //   font-size: ${fontSizes.xsmall};
  // }
`;
const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
`;

const DELTA = 5;

const useGlobalScroll = callback => {
  return useWindowEvent('scroll', callback);
};

const useGlobalResize = callback => {
  return useWindowEvent('resize', callback);
};

const useGlobalKeydown = callback => {
  return useWindowEvent('keydown', callback);
};

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const handleScroll = useCallback(() => {
    const fromTop = window.scrollY;
    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }
    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }
    setLastScrollTop(fromTop);
  }, [isMounted, menuOpen, scrollDirection, lastScrollTop]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  }, [menuOpen]);

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) {
        return;
      }
      if (e.which === 27 || e.key === 'Escape') {
        toggleMenu();
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useGlobalScroll(() => handleScroll());
  useGlobalResize(() => handleResize());
  useGlobalKeydown(e => handleKeydown(e));

  return (
    <NavContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <Navbar>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <Hamburger onClick={toggleMenu}>
                <HamburgerBox>
                  <HamburgerInner menuOpen={menuOpen} />
                </HamburgerBox>
              </Hamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks>
          <NavList>
            <TransitionGroup>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={name} classNames="fadedown" timeout={3000}>
                    <NavListItem key={name} style={{ transitionDelay: `${i * 100}ms` }}>
                      <NavLink href={url}>{name}</NavLink>
                    </NavListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </NavList>
        </NavLinks>
      </Navbar>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </NavContainer>
  );
};

export default Nav;
