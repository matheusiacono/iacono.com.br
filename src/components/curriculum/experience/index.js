import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

const Experience = ({ items }) => (
  <div>
    {items.map(item => (
      <g.Div key={item.company} margin="1em 0">
        <g.Div display="flex" alignItems="center">
          <g.H3 margin="0">{item.company}</g.H3>
          <g.Div
            marginLeft="auto"
            color="#FFF"
            backgroundColor="#000"
            width="90px"
            textAlign="right"
            height="100%"
          >
            {item.time}
          </g.Div>
        </g.Div>
        <g.P margin="0 0 0 3em">{item.description}</g.P>
      </g.Div>
    ))}
  </div>
);

Experience.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Experience;
