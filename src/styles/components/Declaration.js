import styled from 'styled-components';
import theme from '@styles/theme';
import mixins from '@styles/mixins';
import media from '@styles/media';

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

const DeclarationBracketLeft = styled.div`
  ${mixins.flexBetween};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  &:before {
    margin-left: 10px;
    content: ' ( ';
    color: ${colors.highlights};
  }
`;

const DeclarationBracketRight = styled.div`
  ${mixins.flexBetween};
  font-family: ${fonts.SFMono};
  font-weight: normal;
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

const DeclarationJSX = styled.div`
  font-family: ${fonts.SFMono};
  font-weight: normal;
  color: ${colors.introText};
  ${props =>
    props.isOpening === 'true'
      ? `
    &:before {
      content: '<';
      color: ${colors.pseudoElem};
    }
    `
      : `
    &:before {
      content: '</';
      color: ${colors.pseudoElem};
    }
    `}

  &:after {
    content: '>';
    color: ${colors.pseudoElem};
  }
  margin-left: -70px;
  ${media.tablet`margin-left: -20px;`};
  ${media.thone`margin-left: 0px;`};
`;

export {
  Declaration,
  DeclarationBrackets,
  DeclarationArrow,
  DeclarationJSX,
  DeclarationBracketLeft,
  DeclarationBracketRight
};
