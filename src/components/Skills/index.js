import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icons from '@components/Icons';
import { SkillsContainer, SkillsList, SkillItem } from './styles';

const Skill = ({ skillDetail }) => {
  // eslint-disable-next-line no-unused-vars
  const [animate, setAnimate] = useState('none');
  // eslint-disable-next-line no-unused-vars
  const [skill, size, left, top, animationCurrent] = skillDetail.split(' - ');
  const isAnimated = true;
  const animation = animate;
  return (
    <SkillItem>
      <Icons
        name={skill}
        size={size}
        left={left}
        top={top}
        isAnimated={isAnimated}
        animation={animation}
      />
      <span>{skill}</span>
    </SkillItem>
  );
};

Skill.propTypes = {
  skillDetail: PropTypes.string.isRequired
};

const Skills = ({ skills }) => {
  return (
    <SkillsContainer>
      <SkillsList>
        {skills && skills.map(skill => <Skill key={skill} skillDetail={skill} />)}
      </SkillsList>
    </SkillsContainer>
  );
};

Skills.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skills: PropTypes.array.isRequired
};

export default Skills;
