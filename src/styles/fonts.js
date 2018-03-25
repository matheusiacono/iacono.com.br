import { css } from 'glamor';

import MontserratRegularWoff from '../assets/fonts/montserrat-regular.woff';
import MontserratRegularWoff2 from '../assets/fonts/montserrat-regular.woff2';
import MontserratBoldWoff from '../assets/fonts/montserrat-bold.woff';
import MontserratBoldWoff2 from '../assets/fonts/montserrat-bold.woff2';

import LoraRegularWoff from '../assets/fonts/lora-regular.woff';
import LoraRegularWoff2 from '../assets/fonts/lora-regular.woff2';
import LoraItalicWoff from '../assets/fonts/lora-italic.woff';
import LoraItalicWoff2 from '../assets/fonts/lora-italic.woff2';
import LoraBoldWoff from '../assets/fonts/lora-bold.woff';
import LoraBoldWoff2 from '../assets/fonts/lora-bold.woff2';
import LoraBoldItalicWoff from '../assets/fonts/lora-bolditalic.woff';
import LoraBoldItalicWoff2 from '../assets/fonts/lora-bolditalic.woff2';


const fonts = {
  montserrat: {
    regular: {
      woff: MontserratRegularWoff,
      woff2: MontserratRegularWoff2,
    },
    bold: {
      woff: MontserratBoldWoff,
      woff2: MontserratBoldWoff2,
    },
  },
  lora: {
    regular: {
      woff: LoraRegularWoff,
      woff2: LoraRegularWoff2,
    },
    bold: {
      woff: LoraBoldWoff,
      woff2: LoraBoldWoff2,
    },
    italic: {
      woff: LoraItalicWoff,
      woff2: LoraItalicWoff2,
    },
    boldItalic: {
      woff: LoraBoldItalicWoff,
      woff2: LoraBoldItalicWoff2,
    },
  },
};

css.global('@font-face', {
  fontFamily: 'Montserrat',
  src: `local('Montserrat Regular'), local('Montserrat-Regular'),
    url(${fonts.montserrat.regular.woff2}) format('woff2'),
    url(${fonts.montserrat.regular.woff}) format('woff')`,
  fontWeight: '400',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Montserrat',
  src: `local('Montserrat Bold'), local('Montserrat-Bold'),
    url(${fonts.montserrat.bold.woff2}) format('woff2'),
    url(${fonts.montserrat.bold.woff}) format('woff')`,
  fontWeight: '700',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Lora',
  src: `local('Lora Regular'), local('Lora-Regular'),
    url(${fonts.lora.regular.woff2}) format('woff2'),
    url(${fonts.lora.regular.woff}) format('woff')`,
  fontWeight: '400',
  fontStyle: 'normal',
});

css.global('@font-face', {
  fontFamily: 'Lora',
  src: `local('Lora Italic'), local('Lora-Italic'),
    url(${fonts.lora.italic.woff2}) format('woff2'),
    url(${fonts.lora.italic.woff}) format('woff')`,
  fontWeight: '400',
  fontStyle: 'italic',
});

css.global('@font-face', {
  fontFamily: 'Lora',
  src: `local('Lora Bold Italic'), local('Lora-Bold-Italic'),
    url(${fonts.lora.boldItalic.woff2}) format('woff2'),
    url(${fonts.lora.boldItalic.woff}) format('woff')`,
  fontWeight: '700',
  fontStyle: 'italic',
});

css.global('@font-face', {
  fontFamily: 'Lora',
  src: `local('Lora Bold'), local('Lora-Bold'),
    url(${fonts.lora.bold.woff2}) format('woff2'),
    url(${fonts.lora.bold.woff}) format('woff')`,
  fontWeight: '700',
  fontStyle: 'normal',
});
