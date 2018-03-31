import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

const FieldHeader = ({ title }) => (
  <Fragment>
    <g.H2 textTransform="uppercase" marginBottom="0">{title}</g.H2>
    <g.Hr marginTop="0" border="2px solid #000" />
  </Fragment>
);

FieldHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FieldHeader;
