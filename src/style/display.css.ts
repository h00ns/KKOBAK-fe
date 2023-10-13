import { style } from '@vanilla-extract/css';

export const flx_col = style({
  display: 'flex',
  flexDirection: 'column',
});

export const r_gap_1 = style([
  flx_col,
  {
    rowGap: '8px',
  },
]);
export const r_gap_2 = style([
  flx_col,
  {
    rowGap: '16px',
  },
]);
