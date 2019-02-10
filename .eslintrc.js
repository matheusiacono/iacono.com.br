module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
  },
  globals: {
    graphql: 'readable',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
