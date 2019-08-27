import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.small};
  color: ${colors.bulletsText};
  background-color: ${colors.bulletsIcons};
  padding: 10px;
  svg {
    width: ${fontSizes.small};
    height: ${fontSizes.small};
  }
  span {
    margin-left: 10px;
  }
`;

export { AboutContainer, FlexContainer, ContentContainer, SkillsContainer, Skill };
