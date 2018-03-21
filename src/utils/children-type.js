import PropTypes from 'prop-types';

const ChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export default ChildrenType;
