import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Icons from '@components/Icons';
import { SkillsContainer, SkillsList, SkillItem, SkillsMenu, PlayLink } from './styles';

const Skill = ({ skillDetail, play }) => {
  const [skill, size, left, top, animationCurrent] = skillDetail.split(' - ');
  const isAnimated = true;
  const animation = play ? animationCurrent : 'none';
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
  skillDetail: PropTypes.string.isRequired,
  play: PropTypes.bool.isRequired
};

const Skills = ({ skills }) => {
  const [play, setPlay] = useState(false);
  const togglePlay = useCallback(() => {
    setPlay(!play);
  }, [play]);
  return (
    <SkillsContainer>
      <SkillsMenu>
        <PlayLink onClick={togglePlay}>
          <Icons name={play ? 'Stop' : 'Play'} />
        </PlayLink>
      </SkillsMenu>
      <SkillsList>
        {skills && skills.map(skill => <Skill key={skill} skillDetail={skill} play={play} />)}
      </SkillsList>
    </SkillsContainer>
  );
};

Skills.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skills: PropTypes.array.isRequired
};

export default Skills;
