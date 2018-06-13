import React from 'react';
import { presets } from 'glamor';
import g from 'glamorous';

import ChildrenType from '../../../utils/children-type';

const List = g.ul({
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  gridGap: '5px 20px',
  width: '300px',
  listStyle: 'none',
  padding: '0',

  [presets.Tablet]: {
    marginLeft: '2em',
  },
});

const InfoList = ({ children }) => <List>{children}</List>;

InfoList.propTypes = {
  children: ChildrenType.isRequired,
};

export default InfoList;
