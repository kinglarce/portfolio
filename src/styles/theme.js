const theme = {
  colors: {
    lightGreen: '#E5FCC2', // transGreen - Highlights
    lightBlueGreen: '#9DE0AD', // white, mediumGrey - Headings (h1, h2, ...)
    blueGreen: '#45ADA8', // green, blue - Colors for Bullets, "Hi" text, Counting "01.", Hovering Links and Button
    darkBlue: '#547980', // slate - Colors for About Skills, Footer, Hero Subtitle Typings, Cursor and Paragraph Color
    lightDarkBlue: '#76a0a8', // lightSlate - Email & Social Media Color
    lighterDarkBlue: '#9DBEC4', // lightestSlate - Nav Link Color
    gray: '#7d7272', // lightNavy - Mobile Nav Menu Background
    darkGray: '#594F4F', // darkNavy, - Footer Background
    darkerGray: '#4d4545', // navy - Nav & Body Background
    // transLightBlueGreen : 'rgba(157,224,173, 0.7)', // transGreen
    shadowDarkGray: 'rgb(89,79,79, 0.7)', // shadowNavy - Box Shadows

    // dark: '#000007',
    // darkestNavy: '#01050b',
    darkNavy: '#020c1b', // footer background
    navy: '#0a192f', // nav navigation back, global body background
    lightNavy: '#172a45', // (is the mobile responsive)menu background
    // darkGrey: '#333f58', // layout
    mediumGrey: '#2d3952', // heading - about me title
    // blueGrey: '#293d5a',
    // grey: '#4c5772',
    // lightGrey: '#606a86',
    slate: '#8892b0', // text colors for about skills, footer(not really use), hero subtitle typings, typer cursor, global cursor blinking & body paragraph colors
    lightSlate: '#a8b2d1', // email text and vertical line, footer social media color , social icons color and vertical line
    lightestSlate: '#ccd6f6', // nav link color
    // offWhite: '#dce7ff',
    white: '#e6f1ff', //  global all of these h1, h2, h3, h4, h5
    // pink: '#FF647F',
    // yellow: '#FFC464',
    // orange: '#FF9E64',
    green: '#64ffda',
    // about the triangle bullet
    // hero the "hi my name"
    // menu "01." text color for mobile res
    // nav the "01" for normal desktop, the hamburget lines
    // button\ the button text and border color
    // global hovering on links
    // heading, the "01. About Me" color, the "01." only
    // inlinelink, the "a link" tag text color
    // mixins, the link, and all the buttons color and border color
    blue: '#71AFFF', // global button active (could be the same as above)
    // darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)', // global when highting something
    transGreen: 'rgba(100, 255, 218, 0.07)', // button, mixins on hover or active
    // transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)' // menu, mixins box shadows
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
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`
};

export default theme;
