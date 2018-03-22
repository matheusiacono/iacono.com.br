import Link from 'gatsby-link';
import glamorous from 'glamorous';

const MenuLink = glamorous(Link)({
  color: '#666',
  display: 'block',
  padding: '1rem 0',
  transition: 'all .25s ease-in-out',
  transform: 'skew(15deg)',
  textDecoration: 'none',

  ':hover': {
    color: '#eee',
  },
});

export default MenuLink;
