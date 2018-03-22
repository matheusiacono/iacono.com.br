import React from 'react';

import Menu from '../menu';

const MenuRoot = () => (
  <nav>
    <Menu
      menu={[
        { text: 'Início', path: '/' },
        { text: 'Artigos', path: '/artigos/' },
        { text: 'Rascunhos', path: '/rascunhos/' },
        { text: 'Sobre', path: '/sobre/' },
        { text: 'Participe', path: '/participe/' },
        { text: 'Procurar', path: '/procurar/' },
        { text: 'Contato', path: '/contato/' },
      ]}
    />
  </nav>
);

export default MenuRoot;
