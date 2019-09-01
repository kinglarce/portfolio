import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const ExperienceContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`
    display: block;
  `};
`;
const Tabs = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    overflow-x: hidden;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding-right: 20px;
  transition: ${theme.transition};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${props => (props.isActive ? colors.highlights : colors.links)};

  ${media.thone`
    ${mixins.flexCenter};
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.highlights};
    min-width: 100%;
    div:first-child {
      display: block;
    }
    div:last-child {
      display: ${props => (props.isActive ? 'block' : 'none')};
    }
  `};
  &:hover,
  &:focus {
    color: ${colors.highlights};
    background-color: ${colors.navBackground};
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.medium};
    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      &:before {
        content: '-';
        position: absolute;
        left: 0;
        color: ${colors.pseudoElem};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;

export { ExperienceContainer, TabsContainer, Tabs, Tab, ContentContainer, TabContent };
