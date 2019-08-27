import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Icons from '@components/Icons';
import { socialMedia } from '@config';
import { theme } from '@styles';
import { SocialContainer, SocialItemList, SocialItem, SocialLink } from './styles';

const { mountingDelays } = theme;

const MOUNTING_DELAY = mountingDelays.social;

const Social = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), MOUNTING_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SocialContainer>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition timeout={3000} classNames="fade">
            <SocialItemList>
              {socialMedia &&
                socialMedia.map(({ url, name }) => (
                  <SocialItem key={name}>
                    <SocialLink
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}
                    >
                      <Icons name={name} />
                    </SocialLink>
                  </SocialItem>
                ))}
            </SocialItemList>
          </CSSTransition>
        )}
      </TransitionGroup>
    </SocialContainer>
  );
};

export default Social;
