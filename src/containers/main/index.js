import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'glamor/reset';
import { css } from 'glamor';

import Header from '../../components/header';
import MenuRoot from '../../components/menu-root';
import PageContent from '../../components/page-content';
import Footer from '../../components/footer';

import ChildrenType from '../../utils/children-type';
import appendTitle from '../../utils/append-title';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

css.global('@font-face', {
  fontFamily: 'Montserrat',
  src: `local('Montserrat Regular'), local('Montserrat-Regular'),
    url(${fonts.montserrat.regular.woff2}) format('woff2'),
    url(${fonts.montserrat.regular.woff}) format('woff')`,
  fontWeight: '400',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Montserrat',
  src: `local('Montserrat Bold'), local('Montserrat-Bold'),
    url(${fonts.montserrat.bold.woff2}) format('woff2'),
    url(${fonts.montserrat.bold.woff}) format('woff')`,
  fontWeight: '700',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Raleway',
  src: `local('Raleway'), local('Raleway-Regular'),
    url(${fonts.raleway.regular.woff2}) format('woff2'),
    url(${fonts.raleway.regular.woff}) format('woff')`,
  fontWeight: '400',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Raleway',
  src: `local('Raleway Bold'), local('Raleway-Bold'),
    url(${fonts.raleway.bold.woff2}) format('woff2'),
    url(${fonts.raleway.bold.woff}) format('woff')`,
  fontWeight: '700',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Embossed Germanica',
  src: `url(${fonts.embossedGermanica.woff2}) format('woff2'),
    url(${fonts.embossedGermanica.woff}) format('woff')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

css.global('html, body', { width: '100%', height: '100%' });
css.global('body', {
  color: colors.text,
  fontFamily: 'Raleway, sans-serif',
});
css.global('#___gatsby', {
  height: '100%',
});
css.global('#___gatsby > div', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const Main = ({ children, title }) => (
  <Fragment>
    <Helmet title={appendTitle(title, 'Matheus Iácono')} />
    <Header menu={MenuRoot} />
    <PageContent>{children}</PageContent>
    <Footer />
  </Fragment>
);

Main.propTypes = {
  children: ChildrenType.isRequired,
  title: PropTypes.string,
};

Main.defaultProps = {
  title: '',
};

export default Main;
