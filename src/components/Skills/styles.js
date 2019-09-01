import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts, skillsHeight } = theme;

const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${skillsHeight};
  ${media.tablet`
    height: 100%;
    margin-left: 60px;
  `};
  ${media.tablet`margin: 60px auto 0;`};
`;

const SkillsList = styled.ul`
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(2,40vw);
    overflow: hidden;
  `};
`;

const SkillItem = styled.li`
  span {
    display: none;
  }
  ${media.tablet`
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
