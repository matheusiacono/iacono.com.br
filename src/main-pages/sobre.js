import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';

import Page from '../components/page';

import colors from '../styles/colors';
import postImage from '../assets/img/sobre-background.jpeg';

const link = css({
  color: colors.secondary(),
});

const AboutPage = () => (
  <Page pageTitle="Sobre" title="Sobre mim" image={postImage}>
    <p id="sobre-mim">
      Matheus Iácono. Nasci no interior da Bahia, mas cedo mudei para Aracaju onde vivi até os 25
      anos. Desde criança sou apaixonado por conhecimento, sempre gostei de ler e estudar. Apesar de
      usar computadores desde a infância, só aprendi a programar quando entrei na faculdade em 2010.
      Em 2013, após trancar o curso de Engenharia da Computação comecei a trabalhar com
      desenvolvimento web. Sempre foquei meus estudos no front end, ainda que tenha experiência com
      back end (C#, PHP e Node). Em 2018, formado em Gestão da Tecnologia da Informação e cursando
      Ciência da Computação, mudei para São Paulo em busca de novos desafios como desenvolvedor
      front end.
    </p>
    <p>
      {'Você pode ver meu currículo '}
      <Link to="/curriculo/" className={link}>
        clicando aqui
      </Link>
      .
    </p>
    <h2>Sobre o site</h2>
    <p>
      Estudar, resolver problemas e discutir com os amigos. Essa sempre foi minha forma de aprender.
      Criei este site na tentativa de catalogar os meus estudos e compartilhar com um número maior
      de pessoas. A ideia é escrever{' '}
      <Link to="/artigos/" className={link}>
        artigos
      </Link>{' '}
      relacionados ao front end, à área de desenvolvimento em geral, além de temas de outras áreas
      como matemática e estatística. Também quero falar sobre opiniões, preferências e temas
      pessoais na seção de{' '}
      <Link to="/rascunhos/" className={link}>
        rascunhos
      </Link>{' '}
      . Além disso, quero registrar sobre o curso de Ciência da Computação para acompanhar as
      matérias e compartilhar o que for interessante.
    </p>
    <p>
      <small>
        {'Imagem: '}
        <a
          target="_blank"
          rel="noopener noreferrer nofollow external"
          href="http://www.pedronoronha.com/"
          className={link}
        >
          Pedro Noronha Fotografia
        </a>
      </small>
    </p>
  </Page>
);

export default AboutPage;
