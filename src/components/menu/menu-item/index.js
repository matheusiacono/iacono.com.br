import glamorous from 'glamorous';

const MenuItem = glamorous.li({
  backgroundImage:
    'linear-gradient(to bottom, transparent 50%, #448ccb 50%, #448ccb 95%, #0072bc 95%)',
  backgroundSize: '100% 200%',
  backgroundPosition: 'top center',
  color: '#666',
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all .25s ease-in-out',
  borderLeft: '2px solid #ddd',
  transform: 'skew(-15deg)',
  flex: '1 1 auto',

  ':hover': {
    backgroundPosition: 'bottom center',
    color: 'rgba(0, 0, 0, 0.75)',
  },

  ':last-child': {
    borderRight: '2px solid #ddd',
  },
});

export default MenuItem;
