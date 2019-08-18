import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  return (
    <div>
      Main
      {data}
    </div>
  );
};

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default IndexPage;
