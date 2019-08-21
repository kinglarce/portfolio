import React from 'react';
import PropTypes from 'prop-types';
import IconGithub from './github';
import IconLinkedin from './linkedin';
import IconInstagram from './instagram';
import IconFacebook from './facebook';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Facebook':
      return <IconFacebook />;
    case 'Instagram':
      return <IconInstagram />;
    default:
      return <IconGithub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormattedIcon;
