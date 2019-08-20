import React, { useState, useEffect, useCallback } from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

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
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
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
  font-size: 50px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`;

const Cursor = styled.span`
  font-size: 50px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
  animation: 1s blink step-end infinite;
  @keyframes "blink" {
    from,
    to {
      color: transparent;
    }
    50% {
      color: ${colors.slate};
    }
  }
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

const DELAY = 300;

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);
  useEffect(() => callback(state), [state, callback]);
  return [state, setState];
};

const COUNT = 3;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const [isMounted, setIsMounted] = useState(false);
  const [counter, setCounter] = useState(COUNT);
  const [subtitles, setSubtitles] = useState(frontmatter.subtitles.slice(0, counter));
  const [typing, setTyping] = useStateWithCallback(true, () => {
    setTimeout(() => setTyping(true), DELAY);
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const onTypingDone = () => {
    let range = [];
    if (counter === 9) {
      setCounter(COUNT);
      range = [0, COUNT];
    } else {
      setCounter(counter + COUNT);
      range = [counter, counter + COUNT];
    }
    const [start, end] = range;
    setSubtitles(frontmatter.subtitles.slice(start, end));
    setTyping(false);
  };

  const one = () => <Hi style={{ transitionDelay: '100ms' }}>{frontmatter.title}</Hi>;
  const two = () => (
    <Name style={{ transitionDelay: '200ms' }}>
      {frontmatter.name}
.
    </Name>
  );
  const three = useCallback(
    () => (
      <Subtitle style={{ transitionDelay: '600ms' }}>
        {typing ? (
          <Typist avgTypingDelay={100} onTypingDone={onTypingDone} startDelay={800}>
            {subtitles.map(text => (
              <span key={text}>
                <Typist.Delay ms={300} />
                {text}
                <Typist.Backspace count={text.length} delay={DELAY} />
              </span>
            ))}
          </Typist>
        ) : (
          <Cursor>|</Cursor>
        )}
      </Subtitle>
    ),
    [typing]
  );
  const four = () => (
    <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: html }} />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
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
