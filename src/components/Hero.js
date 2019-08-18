import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { theme, mixins, mediaQuery, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${mediaQuery.tablet`padding-top: 150px;`};
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
  ${mediaQuery.desktop`font-size: ${fontSizes.small};`};
  ${mediaQuery.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${mediaQuery.desktop`font-size: 70px;`};
  ${mediaQuery.tablet`font-size: 60px;`};
  ${mediaQuery.phablet`font-size: 50px;`};
  ${mediaQuery.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${mediaQuery.desktop`font-size: 70px;`};
  ${mediaQuery.tablet`font-size: 60px;`};
  ${mediaQuery.phablet`font-size: 50px;`};
  ${mediaQuery.phone`font-size: 40px;`};
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

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => <Hi style={{ transitionDelay: '100ms' }}>{frontmatter.title}</Hi>;
  const two = () => (
    <Name style={{ transitionDelay: '200ms' }}>
      {frontmatter.name}
.
    </Name>
  );
  const three = () => (
    <Subtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</Subtitle>
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