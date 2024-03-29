import { css } from 'styled-components';
import theme from '@styles/theme';
import media from '@styles/media';

const { desktop, tablet, phablet } = media;
const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterStart: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.hoverLinks};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.link};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.hoverLinks};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.pseudoElem};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.buttons};
    background-color: transparent;
    border: 1px solid ${colors.buttons};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.hoverButtons};
      color: ${colors.hoverTextButtons};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.buttons};
    background-color: transparent;
    border: 1px solid ${colors.buttons};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${colors.hoverLinks};
      color: ${colors.hoverTextButtons};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${desktop`padding: 0 100px;`};
    ${tablet`padding: 0 50px;`};
    ${phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.boxShadow};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.hoverBoxShadow};
    }
  `,

  transformTransitionEase: css`
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    transition-delay: 0.12s;
  `
};

export default mixins;
