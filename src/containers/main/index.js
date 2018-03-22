import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../../components/header';
import MenuRoot from '../../components/menu-root';
import PageContent from '../../components/page-content';
import Footer from '../../components/footer';

import ChildrenType from '../../utils/children-type';
import appendTitle from '../../utils/append-title';

const Main = ({ children, title }) => (
  <Fragment>
    <Helmet title={appendTitle(title, 'Matheus Iácono')} />
    <Header menu={MenuRoot} />
    <PageContent>
      {children}
    </PageContent>
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
