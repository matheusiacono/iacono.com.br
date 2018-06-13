export default {
  personal: [
    { text: 'City', value: 'São Paulo, Brazil' },
    { text: 'Email', value: 'matheus@iacono.com.br' },
    { text: 'Skype', value: 'matheus.iacono' },
    { text: 'Github', value: 'github.com/matheusiacono' },
    { text: 'Linkedin', value: 'linkedin.com/in/matheusiacono' },
  ],
  education: [
    {
      course: 'Information Technology Management',
      university: 'Universidade Estácio de Sá',
      time: '2015-2017',
      description: 'Bachelor of Technology',
    },
  ],
  experience: [
    {
      company: 'Front End Developer - Easynvest',
      time: '2018-present',
      description: 'Part of a team developing the new interface of the investments platform.',
    },
    {
      company: 'Front End Developer - ma9 Soluções Inteligentes',
      time: '2017-2017',
      description:
        'Developed a banking services management system and an ATM interface using web technologies.',
    },
    {
      company: 'Full Stack Developer - Caueira',
      time: '2015-2017',
      description:
        'Created a book distribution and management web application for a NGO. Also maintained several web applications.',
    },
    {
      company: 'Web Developer - MoobiTech',
      time: '2015-2015',
      description:
        'Developed & maintained an internal MVC Framework used in some web applications including an union management system and a hiring steps system for a HR company.',
    },
    {
      company: 'Web Developer - FTSBrasil',
      time: '2013-2015',
      description:
        'Developed & maintained multiple web applications including eCommerce, credit card contract steps, service marketplace & an internal content management system for institutional websites.',
    },
  ],
  languages: [
    { language: 'English', level: 'Advanced' },
    { language: 'Portuguese', level: 'Native' },
  ],
  skills: [
    {
      text: 'Javascript',
      children: [
        { text: 'ES2015+' },
        { text: 'Object Oriented' },
        { text: 'Functional JS' },
        {
          text: 'React',
          children: [
            { text: 'Recompose' },
            { text: 'Redux' },
            { text: 'React Router' },
            { text: 'Gatsby' },
            { text: 'create-react-app' },
          ],
        },
        { text: 'RxJs' },
        { text: 'Typescript' },
        {
          text: 'Angular 2+',
          children: [{ text: 'ngrx' }],
        },
        {
          text: 'Tests',
          children: [
            { text: 'Jest' },
            { text: 'Mocha' },
            { text: 'Cypress' },
            { text: 'Protractor' },
            { text: 'Cucumber' },
            { text: 'Puppeteer' },
          ],
        },
        {
          text: 'Tools',
          children: [
            { text: 'Babel' },
            { text: 'Webpack' },
            { text: 'ESLint' },
            { text: 'Prettier' },
            { text: 'NPM Scripts' },
          ],
        },
        {
          text: 'NodeJs',
          children: [{ text: 'Express' }, { text: 'Koa' }],
        },
        { text: 'Electron' },
        { text: 'jQuery' },
      ],
    },
    {
      text: 'HTML',
      children: [{ text: 'Responsive' }, { text: 'Semantic' }, { text: 'Accessible' }],
    },
    {
      text: 'CSS',
      children: [
        { text: 'SASS' },
        { text: 'LESS' },
        { text: 'Stylus' },
        { text: 'CSS Modules' },
        { text: 'Tailwind CSS' },
        { text: 'Materialize' },
        { text: 'Foundation' },
        { text: 'Bootstrap' },
      ],
    },
    {
      text: 'Tools',
      children: [
        { text: 'Git' },
        { text: 'Linux/macOS' },
        { text: 'Bash/Zsh' },
        { text: 'VIM' },
        { text: 'SSH' },
        { text: 'Nginx' },
      ],
    },
    {
      text: 'C#',
      children: [
        { text: 'ASP.NET', children: [{ text: 'Web Forms' }, { text: 'MVC' }, { text: 'Core' }] },
        { text: 'WCF' },
        { text: 'Entity Framework' },
      ],
    },
    {
      text: 'PHP',
      children: [{ text: 'OO' }, { text: 'Laravel' }],
    },
    {
      text: 'BD',
      children: [
        {
          text: 'SQL',
          children: [
            { text: 'MySQL' },
            { text: 'SQL Server' },
            { text: 'Oracle' },
            { text: 'PostgreSQL' },
          ],
        },
        {
          text: 'NoSQL',
          children: [{ text: 'MongoDB' }, { text: 'Redis' }],
        },
      ],
    },
    {
      text: 'API',
      children: [{ text: 'REST' }, { text: 'GraphQL' }, { text: 'SOAP' }],
    },
  ],
};
