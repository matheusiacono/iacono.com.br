import { presets } from 'glamor';
import g from 'glamorous';

const PostHeaderTitle = g.h1({
  margin: '.3em 0',
  fontSize: '3em',
  textAlign: 'center',
  zIndex: '3',
  [presets.Tablet]: {
    fontSize: '4em',
  },
});

export default PostHeaderTitle;
