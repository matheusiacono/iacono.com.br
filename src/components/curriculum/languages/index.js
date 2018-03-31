import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

import InfoList from '../info-list';

const Languages = ({ items }) => (
  <InfoList>
    {items.map(item => (
      <Fragment key={item.language}>
        <g.Li fontStyle="italic">{item.language}</g.Li>
        <g.Li>{item.level}</g.Li>
      </Fragment>
    ))}
  </InfoList>
);

Languages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string,
    level: PropTypes.string,
  })).isRequired,
};

export default Languages;
