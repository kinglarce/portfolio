import styled from 'styled-components';
import theme from '@styles/theme';
import mixins from '@styles/mixins';

const { colors, fonts } = theme;

const DeclarationBrackets = styled.div`
  ${mixins.flexBetween};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  &:before {
    margin-left: 10px;
    content: ' ( ';
    color: ${colors.highlights};
  }
  &:after {
    margin-right: 10px;
    content: ' ) ';
    color: ${colors.highlights};
  }
`;

const DeclarationArrow = styled.div`
  font-family: ${fonts.SFMono};
  font-weight: normal;
  &:after {
    content: ' => ';
    color: ${colors.variableDeclaration};
  }
`;

const Declaration = styled.div`
  font-family: ${fonts.SFMono};
  font-weight: normal;
  &:before {
    content: 'const ';
    color: ${colors.variableDeclaration};
  }
  &:after {
    content: ' =';
    color: ${colors.variableDeclaration};
  }
`;

export { Declaration, DeclarationBrackets, DeclarationArrow };
