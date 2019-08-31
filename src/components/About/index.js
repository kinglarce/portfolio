import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import Skills from '@components/Skills';
import { srConfig } from '@config';
import { Heading, Declaration, DeclarationBrackets, DeclarationArrow } from '@styles';
import { AboutContainer, FlexContainer, ContentContainer } from './styles';

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills } = frontmatter; // avatar
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <AboutContainer id="about" ref={revealContainer}>
      <Heading>
        <Declaration>{title}</Declaration>
        <DeclarationBrackets />
        <DeclarationArrow />
      </Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
        <Skills skills={skills} />
      </FlexContainer>
    </AboutContainer>
  );
};

About.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default About;
