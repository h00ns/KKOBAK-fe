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

export const c_gap_1 = style([
  flx,
  {
    columnGap: '8px',
  },
]);
export const c_gap_2 = style([
  flx,
  {
    columnGap: '16px',
  },
]);
