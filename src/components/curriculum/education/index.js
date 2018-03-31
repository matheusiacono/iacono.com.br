import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

const Education = ({ items }) => (
  <div>
    {items.map(item => (
      <g.Div key={item.course} margin="1em 0">
        <g.Div display="flex" alignItems="center">
          <g.H3 margin="0">{item.course}</g.H3>
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
        <g.H4 margin="0" fontStyle="italic" fontWeight="normal">{item.university}</g.H4>
        <g.P margin="0 0 0 3em">{item.description}</g.P>
      </g.Div>
    ))}
  </div>
);

Education.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    course: PropTypes.string,
    time: PropTypes.string,
    university: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Education;
