import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

const Skills = ({ items }) => (
  <g.Ul display="flex" flexDirection="column" flexWrap="wrap" margin="0">
    {items.map(item => (
      <g.Li key={item.text} padding="2px 0">
        {item.text}
        {item.children && <Skills items={item.children} />}
      </g.Li>
    ))}
  </g.Ul>
);

const SkillItemType = PropTypes.shape({
  text: PropTypes.text,
});

SkillItemType.children = PropTypes.arrayOf(SkillItemType);

Skills.propTypes = {
  items: PropTypes.arrayOf(SkillItemType).isRequired,
};

export default Skills;
