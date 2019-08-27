import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  MarkdownFeatured,
  MarkdownStyleValue,
  MarkdownStyleLabel,
  MarkdownStyleArrayValue,
  MarkdownStyleContainer,
  MarkdownStyleFrontmatter,
  MarkdownStyleContent
} from './styles';

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
            <MarkdownStyleContent key={data}>
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
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ).isRequired,
  excludedDetails: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.arrayOf(PropTypes.string)
};

MarkdownStyle.defaultProps = {
  excludedDetails: [],
  featured: []
};

export default MarkdownStyle;
