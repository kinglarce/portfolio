import styled from 'styled-components';
import theme from '@styles/theme';
import media from '@styles/media';

const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};

  &:before {
    // counter-increment: section;
    // content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${fonts.SFMono};
    font-weight: normal;
    color: ${colors.headings};
    font-size: ${fontSizes.xlarge};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${fontSizes.large};`};
  }
`;

export default Heading;
