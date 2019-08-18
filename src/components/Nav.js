import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from '@components/Menu';
import { throttle } from '@utils';
import { navLinks, navHeight } from '@config';
import { Theme, Mixins, Media } from '@styles';

const { colors, fontSizes, fonts } = Theme;

const NavContainer = styled.header`
  ${Mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${Theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? Theme.navHeight : Theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${Theme.navScrollHeight}` : '0px')}
  );
  ${Media.desktop`padding: 0 40px;`};
  ${Media.tablet`padding: 0 25px;`};
`;
const Navbar = styled.nav`
  ${Mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const Hamburger = styled.div`
  ${Mixins.flexCenter};
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
  ${Media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${Theme.hamburgerWidth}px;
  height: 24px;
`;
const HamburgerInner = styled.div`
  background-color: ${colors.green};
  position: absolute;
  width: ${Theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${Theme.borderRadius};
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
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${Theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? Theme.hamBeforeActive : Theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? Theme.hamAfterActive : Theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${Media.tablet`display: none;`};
`;
const NavList = styled.ol`
  div {
    ${Mixins.flexBetween};
  }
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smallish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.green};
    font-size: ${fontSizes.xsmall};
  }
`;
const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
`;
const ResumeLink = styled.a`
  ${Mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
`;

const DELTA = 5;

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
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
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  };

  const handleKeydown = e => {
    if (!menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      toggleMenu();
    }
  };

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
    window.addEventListener('scroll', () => throttle(handleScroll()));
    window.addEventListener('resize', () => throttle(handleResize()));
    window.addEventListener('keydown', e => handleKeydown(e));

    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', () => handleScroll());
      window.removeEventListener('resize', () => handleResize());
      window.removeEventListener('keydown', e => handleKeydown(e));
    };
  }, [isMounted]);

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

          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <div style={{ transitionDelay: '600ms' }}>
                  <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
                    Resume
                  </ResumeLink>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </NavLinks>
      </Navbar>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </NavContainer>
  );
};

export default Nav;
