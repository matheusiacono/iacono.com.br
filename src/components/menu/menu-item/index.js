import glamorous from 'glamorous';

import colors from '../../../utils/colors';

const MenuItem = glamorous.li({
  backgroundImage: `linear-gradient(to bottom, transparent 50%, ${colors.primary} 50%, ${
    colors.primary
  } 95%, ${colors.terciary} 95%)`,
  backgroundSize: '100% 200%',
  backgroundPosition: 'top center',
  color: colors.link,
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all .25s ease-in-out',
  flex: '1 1 auto',

  ':hover': {
    backgroundPosition: 'bottom center',
    color: 'rgba(0, 0, 0, 0.75)',
  },
});

export default MenuItem;
