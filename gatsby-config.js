module.exports = {
  siteMetadata: {
    title: 'Matheus Iácono',
    description: 'Uma visão pessoal sobre o desenvolvimento front end',
    siteUrl: 'https://iacono.com.br',
    author: 'Matheus Iácono',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-65835703-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/img/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'artigos',
        path: `${__dirname}/src/artigos/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'rascunhos',
        path: `${__dirname}/src/rascunhos/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-feed-generator',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#CBF7ED',
        showSpinner: false,
      },
    },
  ],
};
