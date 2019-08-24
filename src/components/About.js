import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sr from '@utils/sr';
import { FormattedIcon } from '@components/Icons';
import { srConfig } from '@config';
import {
  theme,
  mixins,
  media,
  Section,
  Heading,
  Declaration,
  DeclarationBrackets,
  DeclarationArrow
} from '@styles';

const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.small};
  color: ${colors.bulletsText};
  background-color: ${colors.bulletsIcons};
  padding: 10px;
  svg {
    width: ${fontSizes.small};
    height: ${fontSizes.small};
  }
  span {
    margin-left: 10px;
  }
`;

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
          <SkillsContainer>
            {skills &&
              skills.map(skill => (
                <Skill key={skill}>
                  <FormattedIcon name={skill} />
                  <span>{skill}</span>
                </Skill>
              ))}
          </SkillsContainer>
        </ContentContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

About.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default About;
