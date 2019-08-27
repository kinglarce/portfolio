import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes } = theme;

const TabIconFolder = styled.div`
  ${mixins.flexCenter};
  width: ${fontSizes.xxlarge};
  height: ${fontSizes.xxlarge};
  position: relative;
  background-color: ${props => (props.isActive ? colors.bodyText : colors.bulletsIcons)};
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.59);
  &:before {
    content: '';
    width: 50%;
    height: 2px;
    background-color: ${props => (props.isActive ? colors.bodyText : colors.bulletsIcons)};
    position: absolute;
    top: -2px;
    left: 0px;
  }
  ${media.thone`
    width: 0;
    height: 0;
    position: unset;
  `}
`;

const TabIconContainer = styled.div`
  ${mixins.flexCenter};
  svg {
    width: ${fontSizes.medium};
    height: ${fontSizes.medium};
  }
  span {
    margin-left: -24px;
    margin-right: 10px;
    z-index: 1;
    color: ${props => (props.isActive ? props.fill : colors.links)};
    ${media.thone`margin-left: 0px;`}
  }
`;

export { TabIconFolder, TabIconContainer };
