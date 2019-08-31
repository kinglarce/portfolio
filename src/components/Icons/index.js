import React from 'react';
import PropTypes from 'prop-types';
import IconGithub from '@static/svg/github.svg';
import IconLinkedin from '@static/svg/linkedin.svg';
import IconInstagram from '@static/svg/instagram.svg';
import IconFacebook from '@static/svg/facebook.svg';
// Tech Stack Icons
import IconAnsible from '@static/svg/ansible.svg';
import IconApollo from '@static/svg/apollo.svg';
import IconDocker from '@static/svg/docker.svg';
import IconELKStack from '@static/svg/elk-stack.svg';
import IconGatsby from '@static/svg/gatsby.svg';
import IconGraphQL from '@static/svg/graphql.svg';
import IconHapiJS from '@static/svg/hapijs.svg';
import IconJenkins from '@static/svg/jenkins.svg';
import IconJest from '@static/svg/jest.svg';
import IconMongoDB from '@static/svg/mongodb.svg';
import IconPython from '@static/svg/python.svg';
import IconReactJS from '@static/svg/reactjs.svg';
import IconRedux from '@static/svg/redux.svg';
import IconSass from '@static/svg/sass.svg';
import IconTypescript from '@static/svg/typescript.svg';
import IconNodeJS from '@static/svg/nodejs.svg';

import IconArvato from '@static/svg/arvato.svg';
import IconNettrac from '@static/svg/nettrac.svg';
import IconRakuten from '@static/svg/rakuten.svg';
import IconFolder from '@static/svg/folder.svg';

import { theme } from '@styles';
import { IconAnimatedContainer, IconContainer } from './styles';

const { sizes } = theme;

const ICONS = {
  Github: <IconGithub />,
  Linkedin: <IconLinkedin />,
  Facebook: <IconFacebook />,
  Instagram: <IconInstagram />,
  Ansible: <IconAnsible />,
  Apollo: <IconApollo />,
  Docker: <IconDocker />,
  ELKStack: <IconELKStack />,
  Gatsby: <IconGatsby />,
  GraphQL: <IconGraphQL />,
  HapiJS: <IconHapiJS />,
  Jenkins: <IconJenkins />,
  Jest: <IconJest />,
  MongoDB: <IconMongoDB />,
  Python: <IconPython />,
  ReactJS: <IconReactJS />,
  Redux: <IconRedux />,
  Sass: <IconSass />,
  Typescript: <IconTypescript />,
  NodeJS: <IconNodeJS />,
  Arvato: <IconArvato />,
  Nettrac: <IconNettrac />,
  Rakuten: <IconRakuten />,
  Folder: <IconFolder />
};

const Icons = ({ name, size, left, top, isAnimated }) => {
  return isAnimated ? (
    <IconAnimatedContainer iconSize={sizes[`${size}`]} left={left} top={top}>
      {ICONS[name] ? ICONS[name] : <IconGithub />}
    </IconAnimatedContainer>
  ) : (
    <IconContainer iconSize={sizes[`${size}`]}>
      {ICONS[name] ? ICONS[name] : <IconGithub />}
    </IconContainer>
  );
};

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  isAnimated: PropTypes.bool
};

Icons.defaultProps = {
  size: '4',
  left: '0%',
  top: '0%',
  isAnimated: false
};

export default Icons;
