import { presets } from 'glamor';
import g from 'glamorous';

const PostHeaderTitle = g.h1({
  margin: '.3em 0',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '3em',
  color: '#FFF',
  textAlign: 'center',
  zIndex: '3',
  marginTop: '4em',
  [presets.Tablet]: {
    fontSize: '4em',
  },
});

export default PostHeaderTitle;
