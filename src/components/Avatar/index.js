import React from 'react';
import PropTypes from 'prop-types';
import { name } from '@config';
import { AvatarWrapper, AvatarImg, AvatarContainer, HexaMain, HexaLeft, HexiRight } from './styles';

const Avatar = ({ avatar }) => (
  <AvatarWrapper>
    <AvatarContainer>
      <HexaMain>
        <HexaLeft>
          <HexiRight>
            <AvatarImg fluid={avatar.childImageSharp.fluid} alt={name} />
          </HexiRight>
        </HexaLeft>
      </HexaMain>
    </AvatarContainer>
  </AvatarWrapper>
);

Avatar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  avatar: PropTypes.object.isRequired
};

export default Avatar;
