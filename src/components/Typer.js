import React, { useState } from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from '@styles';
import { useStateWithCallback } from '@utils';

const { colors } = theme;

const Cursor = styled.span`
  font-size: 50px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
  animation: 1s blink step-end infinite;
`;

const DELAY = 200;
const COUNT = 3;

const Typer = ({ data }) => {
  const [counter, setCounter] = useState(COUNT);
  const [subtitles, setSubtitles] = useState(data.slice(0, counter));
  const [typing, setTyping] = useStateWithCallback(true, () => {
    const endDelay = counter === 3 ? DELAY + 4000 : DELAY;
    setTimeout(() => setTyping(true), endDelay);
  });

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
    setSubtitles(data.slice(start, end));
    setTyping(false);
  };

  return typing ? (
    <Typist avgTypingDelay={100} onTypingDone={onTypingDone} startDelay={1500}>
      {subtitles.map(text => (
        <span key={text}>
          <Typist.Delay ms={DELAY} />
          {text}
          <Typist.Backspace count={text.length} delay={DELAY} />
        </span>
      ))}
    </Typist>
  ) : (
    <Cursor>|</Cursor>
  );
};

Typer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default Typer;
