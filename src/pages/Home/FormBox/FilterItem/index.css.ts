import { flx_center, flx_r_gap_1 } from '@/style/display.css';
import { text_center } from '@/style/text.css';
import { style } from '@vanilla-extract/css';
import { Radius } from 'hoon-ds';

export const filter_item = style([
  flx_r_gap_1,
  text_center,
  {
    cursor: 'pointer',

    ':hover': {
      opacity: 0.7,
    },
  },
]);

export const filter_icon = style([
  flx_center,
  {
    width: 48,
    height: 48,
    borderRadius: Radius.MAXIMUM,
  },
]);
