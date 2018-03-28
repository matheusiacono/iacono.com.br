import PropTypes from 'prop-types';
import { presets } from 'glamor';
import g from 'glamorous';

import colors from '../../styles/colors';

const PostHeaderImage = g.div(({ image }) => ({
  backgroundImage: `url('${image}')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: colors.dark(),
  position: 'absolute',
  opacity: '.4',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  zIndex: '1',

  '::after': {
    content: '""',
    backgroundImage: `linear-gradient(180deg, ${colors.dark('.8')} 0, transparent 50%, transparent 90%, ${colors.dark('.8')})`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '2',
  },

  [presets.Desktop]: {
    position: 'fixed',
  },
}));

PostHeaderImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PostHeaderImage;
