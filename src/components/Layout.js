import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Head from '@components/Head';
import Nav from '@components/Nav';
import Social from '@components/Social';
import Email from '@components/Email';
import Footer from '@components/Footer';

import { GlobalStyle } from '@styles';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />
          <GlobalStyle />
          <div className="container">
            <Nav />
            <Social />
            <Email />
            {children}
            <Footer />
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
