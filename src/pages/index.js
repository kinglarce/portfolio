import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => (
  <div>Main Page</div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
