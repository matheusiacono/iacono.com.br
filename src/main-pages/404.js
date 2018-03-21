import React from 'react';

import Main from '../containers/main';

const ErrorPage = () => (
  <Main>Página não encontrada</Main>
);

export default ErrorPage;

export const frontmatter = {
  title: 'Página não encontrada',
  author: 'Matheus Iácono',
  path: '/404/',
};
