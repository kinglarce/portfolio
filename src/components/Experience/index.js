import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import MarkdownStyle from '@components/MarkdownStyle';
import TabIcon from '@components/TabIcon';
import { srConfig } from '@config';
import { Heading, DeclarationJSX } from '@styles';
import {
  ExperienceContainer,
  TabsContainer,
  Tabs,
  Tab,
  ContentContainer,
  TabContent
} from './styles';

const EXCLUDE_DETAILS = ['alias', 'fill', 'url', 'techs'];
const FEATURED = ['company', 'url'];

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
