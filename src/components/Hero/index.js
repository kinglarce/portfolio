import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Typer from '@components/Typer';
import { theme, Declaration } from '@styles';
import { HeroContainer, Intro, Name, Subtitle, Blurb } from './styles';

const { mountingDelays } = theme;

const MOUNTING_DELAY = mountingDelays.hero;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), MOUNTING_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => (
    <Intro style={{ transitionDelay: '100ms' }}>
      <Declaration>{frontmatter.title}</Declaration>
    </Intro>
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

  const items = [one, two, three, four];

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
