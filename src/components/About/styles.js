import styled from 'styled-components';
import { mixins, media, Section } from '@styles';

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 50%;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

export { AboutContainer, FlexContainer, ContentContainer };
