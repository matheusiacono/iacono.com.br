import React from 'react';
import Link from 'gatsby-link';

const MenuRoot = () => (
  <nav>
    <ul>
      <li><Link to="/">Início</Link></li>
      <li>Artigos</li>
      <li>Rascunhos</li>
      <li><Link to="/sobre/">Sobre</Link></li>
      <li>Participe</li>
      <li>Procurar</li>
      <li>Contato</li>
    </ul>
  </nav>
);

export default MenuRoot;
