import styled from 'styled-components';
import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

const MarkdownFeatured = styled.span`
  color: ${colors.highlights};
  a {
    color: ${colors.highlights};
  }
`;

const MarkdownStyleValue = styled.div`
  color: ${colors.subtitle};
  &:before,
  &:after {
    content: "'";
    color: ${colors.pseudoElem};
  }
`;

const MarkdownStyleLabel = styled.div`
  color: ${colors.introText};
  &:after {
    content: ':';
    color: ${colors.pseudoElem};
    margin-right: 10px;
  }
`;

const MarkdownStyleArrayValue = styled.div`
  margin-top: 5px;
  color: ${colors.subtitle};
  &:before {
    content: '[';
    color: ${colors.pseudoElem};
  }
  &:after {
    content: ']';
    color: ${colors.pseudoElem};
  }
`;

const MarkdownStyleContainer = styled.div`
  color: ${colors.bodyText};
  font-size: ${fontSizes.large};
  font-weight: normal;
  letter-spacing: 0.5px;
`;

const MarkdownStyleFrontmatter = styled.div`
  margin-bottom: 20px;
  &:before {
    content: '---';
    color: ${colors.bodyText};
  }
  &:after {
    content: '---';
    color: ${colors.bodyText};
  }
`;

const MarkdownStyleContent = styled.div`
  ${mixins.flexStart};
  flex-wrap: nowrap;
`;

export {
  MarkdownFeatured,
  MarkdownStyleValue,
  MarkdownStyleLabel,
  MarkdownStyleArrayValue,
  MarkdownStyleContainer,
  MarkdownStyleFrontmatter,
  MarkdownStyleContent
};
