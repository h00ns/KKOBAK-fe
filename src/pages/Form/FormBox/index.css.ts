import { flx_c_gap_2, flx_r_gap_2, grid } from '@/style/display.css';
import { style } from '@vanilla-extract/css';
import { white } from 'hoon-ds';

export const form_box = style([
  flx_r_gap_2,
  {
    minHeight: 272,
    padding: 24,
    boxSizing: 'border-box',
    background: white,
  },
]);

export const button_wrap = style([
  grid,
  {
    gridTemplateColumns: '1fr 1fr',
    columnGap: 12,
  },
]);

export const icon_wrap = style({
  width: 16,
  height: 16,
  cursor: 'pointer',

  ':hover': {
    opacity: 0.5,
  },
});

export const filter_wrap = style([
  flx_c_gap_2,
  {
    rowGap: 8,
    flexWrap: 'wrap',
  },
]);
