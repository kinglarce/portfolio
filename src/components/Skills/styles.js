import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts, skillsHeight } = theme;

const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${skillsHeight};
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 100%;`};
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const SkillItem = styled.li`
  ${mixins.flexStart}
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.small};
  color: ${colors.bulletsText};
  background-color: ${colors.bulletsIcons};
  padding: 10px;
  span {
    margin-left: 10px;
  }
`;

export { SkillsContainer, SkillsList, SkillItem };
