import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => (
  <div>
    Main Page
    {data}
  </div>
);

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default IndexPage;
