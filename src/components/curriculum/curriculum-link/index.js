import Link from 'gatsby-link';
import g from 'glamorous';

import colors from '../../../styles/colors';

const CurriculumLink = g(Link)({
  color: colors.secondary(),
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  '@media print': {
    display: 'none',
  },
});

export default CurriculumLink;
