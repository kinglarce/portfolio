const lightScheme = {
  // Light Theme
  darkest: '#000000',
  dark: '#757474',
  darkestWhite: '#9B9B9B',
  darkerWhite: '#B6B6B6',
  darkWhite: '#E7E7E7',
  white: '#FFFFFF',
  lightDarkBlue: '#76a0a8',
  lighterDarkBlue: '#9DBEC4'
};

const darkScheme = {
  // Dark Theme
  background: '#0c1424',
  scrollbars: '#EEFFFF20',
  lineNumbers: '#424242',
  comments: '#545454',
  findHighlight: '#FFCC00',
  focusBorder: '#FFFFFF',
  guides: '#424242',
  invisibles: '#65737E',

  constCurlyBracket: '#C792EA',
  constName: '#FF5370',
  equals: '#bb80b3',
  require: '#82AAFF',
  importExport: '#89DDFF',
  string: '#C3E88D',
  moduleExport: '#B2CCD6',
  brackets: '#FFCC00'
};

const theme = {
  colors: {
    highlights: darkScheme.findHighlight,
    highlightText: darkScheme.background,
    bulletsText: darkScheme.require,
    bulletsIcons: darkScheme.scrollbars,
    introText: darkScheme.constName,
    pseudoElem: darkScheme.importExport,
    links: darkScheme.importExport,
    hoverLinks: darkScheme.findHighlight,
    buttons: darkScheme.focusBorder,
    hoverButtons: darkScheme.require,
    hoverTextButtons: darkScheme.focusBorder,
    bodyText: darkScheme.focusBorder,
    footerText: darkScheme.focusBorder,
    subtitle: darkScheme.string,
    cursor: darkScheme.string,
    headings: darkScheme.focusBorder,
    navLinks: darkScheme.focusBorder,
    socialMedia: darkScheme.focusBorder,
    email: darkScheme.focusBorder,
    boxShadow: darkScheme.lineNumbers,
    hoverBoxShadow: darkScheme.scrollbars,
    mobileNavHamburger: darkScheme.constName,
    mobileNavBackground: darkScheme.scrollbars,
    mobileNavTopBackground: darkScheme.lineNumbers,
    navBackground: darkScheme.background,
    bodyBackground: darkScheme.background,
    footerBackground: darkScheme.background,
    variableDeclaration: darkScheme.constCurlyBracket
  },

  colors_2: {
    highlights: lightScheme.darkest,
    highlightText: lightScheme.white,
    bulletsText: lightScheme.dark,
    bulletsIcons: lightScheme.dark,
    introText: lightScheme.dark,
    pseudoElem: lightScheme.dark,
    links: lightScheme.lightDarkBlue,
    hoverLinks: lightScheme.darkest,
    buttons: lightScheme.dark,
    hoverButtons: lightScheme.darkest,
    hoverTextButtons: lightScheme.darkWhite,
    bodyText: lightScheme.dark,
    footerText: lightScheme.dark,
    subtitle: lightScheme.dark,
    cursor: lightScheme.dark,
    headings: lightScheme.darkestWhite,
    navLinks: lightScheme.dark,
    socialMedia: lightScheme.lighterDarkBlue,
    email: lightScheme.lighterDarkBlue,
    boxShadow: lightScheme.darkerWhite,
    hoverBoxShadow: lightScheme.dark,
    mobileNavHamburger: lightScheme.dark,
    mobileNavBackground: lightScheme.darkWhite,
    mobileNavTopBackground: lightScheme.darkerWhite,
    navBackground: lightScheme.white,
    bodyBackground: lightScheme.white,
    footerBackground: lightScheme.white,
    variableDeclaration: darkScheme.darkWhite
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

  sizes: {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw'
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  skillsHeight: '30vw',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #EEFFFF20, #545454)`,

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
