import React from 'react';
import { presets } from 'glamor';
import g from 'glamorous';

import ChildrenType from '../../../utils/children-type';

const SkillsDiv = g.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  [presets.Tablet]: {
    height: '1000px',
  },

  [presets.Desktop]: {
    height: '650px',
  },

  '@media print': {
    height: '950px',
  },
});

const SkillsContainer = ({ children }) => <SkillsDiv>{children}</SkillsDiv>;

SkillsContainer.propTypes = {
  children: ChildrenType.isRequired,
};

export default SkillsContainer;
