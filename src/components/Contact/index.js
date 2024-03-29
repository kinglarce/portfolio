import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { ContactContainer, Title, ResumeLink } from './styles';

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <ContactContainer id="contact" ref={revealContainer}>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
        Download Resume
      </ResumeLink>
    </ContactContainer>
  );
};

Contact.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
};

export default Contact;
