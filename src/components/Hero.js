import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Typer from '@components/Typer';

import { email } from '@config';
import { theme, mixins, media, Section, Declaration } from '@styles';

const { colors, fontSizes, fonts, mountingDelays } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors.introText};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.large};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.large};`};
  ${media.tablet`font-size: ${fontSizes.medium};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const Subtitle = styled.h3`
  ${mixins.flexStart};
  font-size: ${fontSizes.h3};
  font-family: ${fonts.SFMono};
  line-height: 1.1;
  color: ${colors.subtitle};
  ${media.desktop`font-size: ${fontSizes.h3};`};
  ${media.tablet`font-size: ${fontSizes.xxlarge};`};
  ${media.phablet`font-size: ${fontSizes.xlarge};`};
  ${media.phone`font-size: ${fontSizes.large};`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const MOUNTING_DELAY = mountingDelays.hero;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), MOUNTING_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => (
    <Hi style={{ transitionDelay: '100ms' }}>
      <Declaration>{frontmatter.title}</Declaration>
    </Hi>
  );
  const two = () => <Name style={{ transitionDelay: '200ms' }}>{frontmatter.name}</Name>;
  const three = useCallback(
    () => (
      <Subtitle style={{ transitionDelay: '600ms' }}>
        <span>//</span>
        <Typer data={frontmatter.subtitles} />
      </Subtitle>
    ),
    []
  );
  const four = () => (
    <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: html }} />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <EmailLink href={`mailto:${email}`}>Say Hello</EmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map(item => (
            <CSSTransition key={item} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  );
};

Hero.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default Hero;
