import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins } from '@styles';

const { colors, fontSizes, fonts } = theme;

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
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.medium};
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

const MarkdownStyle = ({ frontmatter, html, list, excludedDetails, featured }) => {
  const experienceDetails = useRef(frontmatter);
  const details = Object.keys(experienceDetails.current).filter(
    detail => !excludedDetails.includes(detail)
  );
  const [featuredKeys, featuredLink] = featured;
  const [listKey, listValue] = list;
  return (
    <MarkdownStyleContainer>
      <MarkdownStyleFrontmatter>
        {details.map(data => {
          return (
            <MarkdownStyleContent>
              <MarkdownStyleLabel>{data}</MarkdownStyleLabel>
              <MarkdownStyleValue>
                {data === featuredKeys ? (
                  <MarkdownFeatured>
                    <span>@</span>
                    <a href={featuredLink} target="_blank" rel="nofollow noopener noreferrer">
                      {frontmatter[data]}
                    </a>
                  </MarkdownFeatured>
                ) : (
                  frontmatter[data]
                )}
              </MarkdownStyleValue>
            </MarkdownStyleContent>
          );
        })}
        <div>
          <MarkdownStyleLabel>{listKey}</MarkdownStyleLabel>
          <MarkdownStyleArrayValue>{listValue.join(', ')}</MarkdownStyleArrayValue>
        </div>
      </MarkdownStyleFrontmatter>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </MarkdownStyleContainer>
  );
};

MarkdownStyle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  excludedDetails: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.arrayOf(PropTypes.string)
};

MarkdownStyle.defaultProps = {
  excludedDetails: [],
  featured: []
};

export default MarkdownStyle;
