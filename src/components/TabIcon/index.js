import React from 'react';
import PropTypes from 'prop-types';
import Icons from '@components/Icons';
import { TabIconFolder, TabIconContainer } from './styles';

const TabIcon = ({ alias, isActive, fill }) => (
  <TabIconContainer isActive={isActive} fill={fill}>
    <TabIconFolder isActive={isActive} />
    <span>
      <Icons name={alias} />
    </span>
  </TabIconContainer>
);

TabIcon.propTypes = {
  alias: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired
};

export default TabIcon;
