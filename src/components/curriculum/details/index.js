import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

import InfoList from '../info-list';

const Details = ({ items }) => (
  <InfoList>
    {items.map(item => (
      <Fragment key={item.text}>
        <g.Li fontStyle="italic">{item.text}</g.Li>
        <g.Li>{item.value}</g.Li>
      </Fragment>
    ))}
  </InfoList>
);

Details.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

export default Details;
