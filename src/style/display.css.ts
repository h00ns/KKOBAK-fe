import { style } from '@vanilla-extract/css';

export const flx = style({
  display: 'flex',
});

export const flx_center = style([flx, { justifyContent: 'center', alignItems: 'center' }]);
export const flx_between = style([flx, { justifyContent: 'space-between', alignItems: 'center' }]);

export const flx_col = style([
  flx,
  {
    flexDirection: 'column',
  },
]);

export const flx_col_center = style([
  flx_col,
  {
    alignContent: 'center',
    justifyContent: 'center',
  },
]);

export const flx_r_gap_1 = style([
  flx_col,
  {
    rowGap: '8px',
  },
]);

export const flx_c_gap_1 = style([
  flx,
  {
    columnGap: '8px',
  },
]);

export const grid = style({
  display: 'grid',
});
