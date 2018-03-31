import { presets } from 'glamor';
import g from 'glamorous';

import '../../../styles/fonts';

const Container = g.div({
  margin: '10px auto',
  width: '90%',
  fontFamily: 'Montserrat, sans-serif',

  [presets.Mobile]: {
    width: '80%',
  },

  '@media print': {
    WebkitPrintColorAdjust: 'exact',
  },
});

export default Container;
