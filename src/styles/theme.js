const color = {
  // Current Theme
  // Highlights
  darkest: '#000000',
  // Colors for Bullets, "Hi" text or intro, Counting "01.", Hovering Links and Button
  // Colors for About Skills, Footer, Hero Subtitle Typings, Cursor and Paragraph Color
  dark: '#757474',
  // Headings (h1, h2, ...)
  darkestWhite: '#9B9B9B',
  // Nav Link Color
  // Email & Social Media Color
  // Box Shadows
  darkerWhite: '#B6B6B6',
  // Mobile Nav Menu Background
  darkWhite: '#E7E7E7',
  // Nav & Body Background
  // Footer Background
  white: '#FFFFFF',
  // darkerWhite: 'rgb(89,79,79, 0.7)', // Box Shadows
  // Old Theme
  lightGreen: '#E5FCC2', // Highlights
  lightBlueGreen: '#9DE0AD', // Headings (h1, h2, ...)
  blueGreen: '#45ADA8', // Colors for Bullets, "Hi" text, Counting "01.", Hovering Links and Button
  darkBlue: '#547980', // Colors for About Skills, Footer, Hero Subtitle Typings, Cursor and Paragraph Color
  lightDarkBlue: '#76a0a8', // Email & Social Media Color
  lighterDarkBlue: '#9DBEC4', // Nav Link Color
  gray: '#7d7272', // Mobile Nav Menu Background
  darkGray: '#594F4F', // Footer Background
  darkerGray: '#4d4545', // Nav & Body Background
  shadowDarkGray: 'rgb(89,79,79, 0.7)' // Box Shadows
};

const theme = {
  colors: {
    highlights: color.darkest,
    highlightText: color.white,
    bullets: color.dark,
    introText: color.dark,
    pseudoElem: color.dark,
    links: color.lightDarkBlue,
    hoverLinks: color.darkest,
    buttons: color.dark,
    hoverButtons: color.darkest,
    hoverTextButtons: color.darkWhite,
    bodyText: color.dark,
    footerText: color.dark,
    subtitle: color.dark,
    cursor: color.dark,
    headings: color.darkestWhite,
    navLinks: color.dark,
    socialMedia: color.lighterDarkBlue,
    email: color.lighterDarkBlue,
    boxShadow: color.darkerWhite,
    hoverBoxShadow: color.dark,
    mobileNavHamburger: color.dark,
    mobileNavBackground: color.darkWhite,
    navBackground: color.white,
    bodyBackground: color.white,
    footerBackground: color.white
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace'
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px'
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  mountingDelays: {
    hero: 300,
    social: 800
  }
};

export default theme;
