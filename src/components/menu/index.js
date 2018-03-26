import React from 'react';

import MenuList from '../menu-list';

const Menu = () => (
  <MenuList
    menu={[
      { text: 'Artigos', path: '/artigos/' },
      { text: 'Rascunhos', path: '/rascunhos/' },
      { text: 'Sobre', path: '/sobre/' },
      { text: 'Participe', path: '/participe/' },
      { text: 'Contato', path: '/contato/' },
    ]}
  />
);

export default Menu;
