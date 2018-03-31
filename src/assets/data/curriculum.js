export default {
  personal: [
    { text: 'Cidade', value: 'São Paulo - SP' },
    { text: 'Email', value: 'matheus@iacono.com.br' },
    { text: 'Blog', value: 'iacono.com.br' },
    { text: 'Linkedin', value: 'linkedin.com/in/matheusiacono' },
  ],
  education: [
    {
      course: 'Gestão de Tecnologia da Informação',
      university: 'Universidade Estácio de Sá',
      time: '2015-2017',
      description:
        'Curso com algumas disciplinas de computação e outras de gestão voltadas para a área de TI.',
    },
    {
      course: 'Engenharia da Computação',
      university: 'Universidade Federal de Sergipe',
      time: '2010-2012',
      description:
        'Após concluir todas as disciplinas de física e matemática, além de várias de computação precisei trancar o curso.',
    },
  ],
  experience: [
    {
      company: 'ma9 Soluções Inteligentes',
      time: '2017',
      description:
        'Trabalhei na criação de um sistema de gerenciamento de correspondentes bancários, o sistema também era instalado em caixas eletrônicos e realizava diversas operações financeiras.',
    },
    {
      company: 'Freelancer',
      time: '2015-2017',
      description:
        'Trabalhei na criação de uma plataforma de distrubuição de livros e gestão de acervo. Também fiz diversos trabalhos de manutenção em sistemas.',
    },
    {
      company: 'MoobiTech',
      time: '2015',
      description:
        'Trabalhei no sistema de gestão sindical da empresa incluindo novas funcionalidades e resolvendo erros. Também realizei manutenção no sistema de gestão de vendas para óticas e num sistema para gerir as etapas de contratação de uma empresa de RH.',
    },
    {
      company: 'FTSBrasil',
      time: '2013-2015',
      description:
        'Trabalhei com manutenção e criação de diversos sistemas incluindo lojas virtuais, esteira de contrato de cartão de crédito, marketplace de serviços e CMS interno para sites institucionais.',
    },
  ],
  languages: [
    { language: 'Inglês', level: 'Avançado' },
    { language: 'Português', level: 'Língua Materna' },
  ],
  skills: [
    {
      text: 'Javascript',
      children: [
        { text: 'ES2015+' },
        { text: 'Orientação a Objetos' },
        { text: 'Paradigma Funcional' },
        {
          text: 'React',
          children: [
            { text: 'Redux' },
            { text: 'React Router' },
            { text: 'Gatsby' },
            { text: 'create-react-app' },
          ],
        },
        {
          text: 'Angular 2+',
          children: [{ text: 'RxJs' }, { text: 'ngrx' }, { text: 'Typescript' }],
        },
        {
          text: 'Testes',
          children: [{ text: 'Jest' }, { text: 'Mocha' }, { text: 'Cypress' }],
        },
        {
          text: 'Ferramentas',
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
      children: [{ text: 'Responsividade' }, { text: 'Semântica' }, { text: 'Acessibilidade' }],
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
      text: 'Ferramentas',
      children: [
        { text: 'Git' },
        { text: 'Linux' },
        { text: 'Bash' },
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
