import React from 'react';
import PropTypes from 'prop-types';
import Icons from '@components/Icons';
import { SkillsContainer, SkillsList, SkillItem } from './styles';

const Skill = ({ skillDetail }) => {
  const [skill, size, left, top, animation] = skillDetail.split(' - ');
  const isAnimated = true;
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
