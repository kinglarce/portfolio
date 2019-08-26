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

import IconArvato from '@static/svg/arvato.svg';
import IconNettrac from '@static/svg/nettrac.svg';
import IconRakuten from '@static/svg/rakuten.svg';
import IconFolder from '@static/svg/folder.svg';

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
  Arvato: <IconArvato />,
  Nettrac: <IconNettrac />,
  Rakuten: <IconRakuten />,
  Folder: <IconFolder />
};

const Icons = ({ name }) => {
  if (!ICONS[name]) return <IconGithub />;
  return ICONS[name];
};

Icons.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icons;
