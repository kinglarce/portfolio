import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { navLinks } from '@config';
import { theme, mixins, mediaQuery } from '@styles';

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
  ${mediaQuery.tablet`display: block;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  box-shadow: -10px 0px 30px -15px ${colors.shadowNavy};
  ${mediaQuery.thone`padding: 25px;`};
  ${mediaQuery.phablet`width: 75vw;`};
  ${mediaQuery.tiny`padding: 10px;`};
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
  counter-increment: item 1;
  ${mediaQuery.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.medium};
  `};
  ${mediaQuery.tiny`font-size: ${fontSizes.smallish};`};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${colors.green};
    font-size: ${fontSizes.small};
    margin-bottom: 5px;
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
const ResumeLink = styled.a`
  ${mixins.bigButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`;

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
          <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
            Resume
          </ResumeLink>
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