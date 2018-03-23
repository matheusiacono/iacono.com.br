import Link from 'gatsby-link';
import glamorous from 'glamorous';

const MenuLink = glamorous(Link)({
  color: 'inherit',
  display: 'block',
  padding: '1rem 0',
  transition: 'all .25s ease-in-out',
  textDecoration: 'none',

  ':hover': {
    color: '#FFF',
  },
});

export default MenuLink;
