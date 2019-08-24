import React from 'react';
import styled from 'styled-components';
import { promptUser, promptHost } from '@config';
import { theme, media } from '@styles';

const { colors } = theme;

const CommandLineContainer = styled.div`
  font-size: 20px;
  ${media.tablet`font-size: 10px;`};
  ${media.phablet`font-size: 10px;`};
  ${media.phone`font-size: 10px;`};
`;

const CommandLinePrompt = styled.div`
  & > span:before {
    color: ${colors.fadeText};
    content: ' ';
    display: block;
    padding-right: 0.8em;
  }
  & > span[data-user]:before {
    content: '[' attr(data-user) '@' attr(data-host) '] $';
  }
  & > span[data-user='root']:before {
    content: '[' attr(data-user) '@' attr(data-host) '] #';
  }
  & > span[data-prompt]:before {
    content: attr(data-prompt);
  }
`;

// eslint-disable-next-line react/prop-types
const CommandLine = ({ children }) => (
  <CommandLineContainer>
    <pre className="language-bash">
      <span className="command-line-prompt">
        <CommandLinePrompt>
          <span data-user={promptUser} data-host={promptHost} />
        </CommandLinePrompt>
      </span>
      {children}
    </pre>
  </CommandLineContainer>
);

export default CommandLine;
