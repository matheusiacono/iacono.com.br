import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import MenuRoot from '../components/menu-root';
import PageContent from '../components/page-content';
import Footer from '../components/footer';

const PageLayout = ({ children }) => (
  <Fragment>
    <Header title="Matheus Iácono" menu={MenuRoot} />
    <PageContent>{children()}</PageContent>
    <Footer />
  </Fragment>
);

PageLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PageLayout;
