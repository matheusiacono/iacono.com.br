import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'glamor/reset';

import PageHeader from '../page-header';
import Post from '../post';

import appendTitle from '../../utils/append-title';
import '../../styles/fonts';

const Page = props => (
  <Fragment>
    <Helmet title={appendTitle(props.pageTitle, 'Matheus Iácono')}>
      <html lang="pt-BR" />
    </Helmet>
    <PageHeader />
    <Post {...props} />
  </Fragment>
);

Page.propTypes = {
  pageTitle: PropTypes.string,
};

Page.defaultProps = {
  pageTitle: '',
};

export default Page;
