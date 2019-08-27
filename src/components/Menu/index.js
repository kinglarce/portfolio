import React from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import {
  MenuContainer,
  Sidebar,
  SidebarBackground,
  NavLinks,
  NavList,
  NavListItem,
  NavLink
} from './styles';

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const { target } = e;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('MenuContainer');
    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <SidebarBackground />
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }) => (
                <NavListItem key={name}>
                  <NavLink href={url}>{name}</NavLink>
                </NavListItem>
              ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
