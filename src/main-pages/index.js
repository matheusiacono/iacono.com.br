import React from 'react';

import Page from '../components/page';

import postImage from '../assets/img/home-background.jpeg';

const IndexPage = () => (
  <Page title="Sempre Aprendendo" image={postImage}>
    <p>
      Olá, me chamo Matheus Iácono, sou desenvolvedor front end e moro em São Paulo. Antes de mudar
      para cá, morava em Aracaju onde passei a maior parte da minha vida. Gosto de estar
      constantemente estudando e de compartilhar o conhecimento com outras pessoas.
    </p>
  </Page>
);

export default IndexPage;
