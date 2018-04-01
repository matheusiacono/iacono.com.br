import React from 'react';
import PropTypes from 'prop-types';
import { css, presets } from 'glamor';
import g from 'glamorous';

import Page from '../components/page';

import colors from '../styles/colors';
import Slack from '../assets/svg/slack.svg';
import Telegram from '../assets/svg/telegram.svg';
import Github from '../assets/svg/github.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Twitter from '../assets/svg/twitter.svg';
import Mail from '../assets/svg/mail.svg';
import postImage from '../assets/img/contato-background.jpeg';

const Grid = g.div({
  fontFamily: 'Montserrat, sans-serif',

  [presets.Desktop]: {
    width: '60%',
    margin: '0 auto',
  },
});

const Label = g.div({
  backgroundColor: colors.primary(),
  color: '#FFF',
  display: 'flex',
  alignItems: 'center',
});

const Glink = g.a({
  color: colors.secondary(),
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
});

const ExtLink = ({ href, children }) => (
  <Glink target="_blank" rel="noopener noreferrer nofollow external" href={href}>
    {children}
  </Glink>
);

ExtLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const svg = css({
  width: '1em',
  fill: '#FFF',
  padding: '0.3em',
});

const ContactPage = () => (
  <Page pageTitle="Contato" title="Contato" image={postImage}>
    <Grid>
      <Label>
        <Github className={svg} /> Sugestões ou discussão
      </Label>
      <div>
        <ExtLink href="//github.com/matheusiacono/iacono.com.br/issues">Issues</ExtLink>
      </div>
      <Label>
        <Twitter className={svg} /> Twitter
      </Label>
      <div>
        <ExtLink href="//twitter.com/matheusiacono">@matheusiacono</ExtLink>
      </div>
      <Label>
        <Github className={svg} /> Github
      </Label>
      <div>
        <ExtLink href="//github.com/matheusiacono">@matheusiacono</ExtLink>
      </div>
      <Label>
        <Linkedin className={svg} /> Linkedin
      </Label>
      <div>
        <ExtLink href="//linkedin.com/in/matheusiacono">@matheusiacono</ExtLink>
      </div>
      <Label>
        <Telegram className={svg} /> Telegram
      </Label>
      <div>
        <ExtLink href="//t.me/matheusiacono">@matheusiacono</ExtLink>
      </div>
      <Label>
        <Slack className={svg} />
        <span>
          Usuário do{' '}
          <ExtLink href="//github.com/training-center/slack"> Slack do Training Center</ExtLink>
        </span>
      </Label>
      <div>@iacono</div>
      <Label>
        <Mail className={svg} /> Email
      </Label>
      <div>contato@iacono.com.br</div>
    </Grid>
  </Page>
);

export default ContactPage;
