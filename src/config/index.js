module.exports = {
  siteTitle: 'King Larce Cortes',
  siteDescription:
    'King Larce Cortes is a software engineer currently based in Tokyo, Japan which has 6 years of experience as a full-stack developer designing, implementing, testing, proposing and learning.',
  siteKeywords:
    'King Larce, King Larce Cortes, kingcort01, hanzodarkria, software engineer, front-end engineer, web developer, software engineer japan, full-stack developer',
  siteUrl: 'http://www.kinglarce.com',
  siteLanguage: 'en_US',

  name: 'King Larce Cortes',
  location: 'Tokyo, Japan',
  email: 'hello@kinglarce.com',
  github: 'https://github.com/kinglarce',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kinglarce'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kinglarce/'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kinglarce/'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/hanzodarkria'
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about'
    }
    // {
    //   name: 'Experience',
    //   url: '#experience'
    // },
    // {
    //   name: 'Contact',
    //   url: '#contact'
    // }
  ],

  googleVerification: '',
  googleAnalyticsID: 'UA-145899832-1',

  navHeight: 100,
  themeColor: '#424242',
  backgroundColor: '#212121',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  })
};
