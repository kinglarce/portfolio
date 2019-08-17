import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Main, Mixins } from '@styles';

const MainContainer = styled(Main)`
  ${Mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ data }) => {
  console.log('WHAT IS THE DATA : ', data);
  return (
    <MainContainer>
      <div>Main</div>
    </MainContainer>
  );
};

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            contactText
            subtitles
          }
          html
        }
      }
    }
  }
`;
