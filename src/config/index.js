module.exports = {
  siteTitle: 'King Larce Cortes',
  siteDescription: '',
  siteKeywords: '',
  siteUrl: 'http://www.kinglarce.com',
  siteLanguage: 'en_US',

  name: 'King Larce Cortes',
  location: 'Tokyo, Japan',
  email: 'kingcort01@gmail.com',
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
      url: 'https://www.instagram.com/larzq/'
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about'
    },
    {
      name: 'Experience',
      url: '#jobs'
    },
    {
      name: 'Work',
      url: '#projects'
    },
    {
      name: 'Contact',
      url: '#contact'
    }
  ],

  googleVerification: '',
  googleAnalyticsID: '',

  navHeight: 100,
  themeColor: '#fff',
  backgroundColor: '#282a38',

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
