import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sr from '@utils/sr';
import Icons from '@components/Icons';
import MarkdownStyle from '@components/MarkdownStyle';
import { srConfig } from '@config';
import { theme, mixins, media, Section, Heading, DeclarationJSX } from '@styles';

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
  span {
    padding: 0 5px;
  }
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
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

const TabIconFolder = styled.div`
  ${mixins.flexCenter};
  width: ${fontSizes.xxlarge};
  height: ${fontSizes.xxlarge};
  position: relative;
  background-color: ${props => (props.isActive ? colors.bodyText : colors.bulletsIcons)};
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.59);
  &:before {
    content: '';
    width: 50%;
    height: 2px;
    background-color: ${props => (props.isActive ? colors.bodyText : colors.bulletsIcons)};
    position: absolute;
    top: -2px;
    left: 0px;
  }
  ${media.thone`
    width: 0;
    height: 0;
    position: unset;
  `}
`;

const TabIconContainer = styled.div`
  ${mixins.flexCenter};
  svg {
    width: ${fontSizes.medium};
    height: ${fontSizes.medium};
  }
  span {
    margin-left: -24px;
    margin-right: 10px;
    z-index: 1;
    color: ${props => (props.isActive ? props.fill : colors.links)};
    ${media.thone`margin-left: 0px;`}
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

const EXCLUDE_DETAILS = ['alias', 'fill', 'url', 'techs'];
const FEATURED = ['company', 'url'];

const TabIcon = ({ alias, isActive, fill }) => (
  <TabIconContainer isActive={isActive} fill={fill}>
    <TabIconFolder isActive={isActive} />
    <span>
      <Icons name={alias} />
    </span>
  </TabIconContainer>
);

TabIcon.propTypes = {
  alias: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
};

const Experience = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <ExperienceContainer id="experience" ref={revealContainer}>
      <Heading margin="40px 0">
        <DeclarationJSX isOpening="true">Experience</DeclarationJSX>
      </Heading>
      <TabsContainer>
        <Tabs role="tablist">
          {data &&
            data.map(({ node }, i) => {
              const { company, alias, fill } = node.frontmatter;
              return (
                <li key={company}>
                  <Tab
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    role="tab"
                    aria-selected={activeTabId === i ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={activeTabId === i ? '0' : '-1'}
                  >
                    <TabIcon alias={alias} isActive={activeTabId === i} fill={fill} />
                    <div>{alias}</div>
                  </Tab>
                </li>
              );
            })}
        </Tabs>
        <ContentContainer>
          {data &&
            data.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { company, techs } = frontmatter;
              return (
                <TabContent
                  key={company}
                  isActive={activeTabId === i}
                  id={`job${i}`}
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby={`job${i}`}
                  aria-hidden={activeTabId !== i}
                >
                  <MarkdownStyle
                    frontmatter={frontmatter}
                    html={html}
                    excludedDetails={EXCLUDE_DETAILS}
                    featured={FEATURED}
                    list={['techs', techs]}
                  />
                </TabContent>
              );
            })}
        </ContentContainer>
      </TabsContainer>
      <Heading margin="40px 0">
        <DeclarationJSX isOpening="false">Experience</DeclarationJSX>
      </Heading>
    </ExperienceContainer>
  );
};

Experience.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default Experience;
