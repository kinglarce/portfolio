import React from 'react';
import PropTypes from 'prop-types';
import Icons from '@components/Icons';
import { SkillsContainer } from './styles';

const Skill = ({ skillDetail }) => {
  const [skill, size, left, top] = skillDetail.split(' - ');
  const isAnimated = true;
  return <Icons name={skill} size={size} left={left} top={top} isAnimated={isAnimated} />;
};

Skill.propTypes = {
  skillDetail: PropTypes.string.isRequired
};

const Skills = ({ skills }) => {
  return (
    <SkillsContainer>
      {skills && skills.map(skill => <Skill key={skill} skillDetail={skill} />)}
    </SkillsContainer>
  );
};

Skills.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skills: PropTypes.array.isRequired
};

export default Skills;
