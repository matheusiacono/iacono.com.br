import Link from 'gatsby-link';
import { presets } from 'glamor';
import glamorous from 'glamorous';

const MenuLink = glamorous(Link)({
  color: 'inherit',
  display: 'inline-block',
  padding: '1rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',

  [presets.Hd]: {
    padding: '2rem',
  },

  [presets.Desktop]: {
    padding: '1rem',
  },

  [presets.Tablet]: {
    padding: '1.5rem',
  },
});

export default MenuLink;
