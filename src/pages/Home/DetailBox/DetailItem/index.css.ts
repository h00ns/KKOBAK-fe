import { flx_c_gap_1, flx_center } from '@/style/display.css';
import { style } from '@vanilla-extract/css';
import { Radius } from 'hoon-ds';

export const detail_item = style([
  flx_c_gap_1,
  {
    alignItems: 'center',
    padding: '4px 8px',
  },
]);

export const filter_icon = style([
  flx_center,
  {
    width: 32,
    height: 32,
    borderRadius: Radius.MAXIMUM,
  },
]);
