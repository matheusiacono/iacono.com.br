import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import MenuRoot from '../components/menu-root';
import PageContent from '../components/page-content';
import Footer from '../components/footer';
import ChildrenType from '../utils/children-type';

const Main = ({ children }) => (
  <Fragment>
    <Helmet title="Matheus Iácono" />
    <Header menu={MenuRoot} />
    <PageContent>
      {children}
    </PageContent>
    <Footer />
  </Fragment>
);

Main.propTypes = {
  children: ChildrenType.isRequired,
};

export default Main;
