import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts, skillsHeight } = theme;

const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${skillsHeight};
  ${media.desktop`
    height: 100%;
    margin-left: 60px;
  `};
  ${media.tablet`margin: 60px auto 0;`};
`;

const SkillsList = styled.ul`
  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
  `};
`;

const SkillItem = styled.li`
  span {
    display: none;
  }
  ${media.desktop`
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
      display: block;
      margin-left: 10px;
    }
  `};
`;

export { SkillsContainer, SkillsList, SkillItem };
