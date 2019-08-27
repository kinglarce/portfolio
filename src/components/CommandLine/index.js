import React from 'react';
import PropTypes from 'prop-types';
import { promptUser, promptHost } from '@config';
import { CommandLineContainer, CommandLinePrompt } from './styles';

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

CommandLine.propTypes = {
  children: PropTypes.element.isRequired
};

export default CommandLine;
