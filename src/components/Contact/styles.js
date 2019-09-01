import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';

const { colors } = theme;

const ContactContainer = styled(Section)`
  text-align: left;
  max-width: 600px;
  margin: 0 0 100px;
  a {
    ${mixins.inlineLink};
  }
`;

const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  color: ${colors.highlights};
`;

export { ContactContainer, Title };
