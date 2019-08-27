import React, { useEffect, useState, useCallback } from 'react';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from '@components/Menu';
import { useWindowEvent } from '@utils';
import { navLinks, navHeight } from '@config';
import {
  NavContainer,
  Navbar,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  NavLinks,
  NavList,
  NavListItem,
  NavLink
} from './styles';

const useGlobalScroll = callback => {
  return useWindowEvent('scroll', callback);
};

const useGlobalResize = callback => {
  return useWindowEvent('resize', callback);
};

const useGlobalKeydown = callback => {
  return useWindowEvent('keydown', callback);
};

const THRESHOLD = 5;

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const handleScroll = useCallback(() => {
    const fromTop = window.scrollY;
    // Make sure they scroll more than THRESHOLD
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= THRESHOLD || menuOpen) {
      return;
    }
    if (fromTop < THRESHOLD) {
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
