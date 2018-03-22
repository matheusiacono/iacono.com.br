import React from 'react';
import glamorous from 'glamorous';

import Main from '../containers/main';

const BlueDiv = glamorous.div({
  backgroundColor: 'blue',
});

const IndexPage = () => (
  <Main>
    <BlueDiv>
      Página inicial
    </BlueDiv>
  </Main>
);

export default IndexPage;

export const frontmatter = {
  title: '',
  author: 'Matheus Iácono',
  path: '/',
};
