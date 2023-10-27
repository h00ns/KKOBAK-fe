import { flx_between, flx_center, flx_end } from '@/style/display.css';
import { mr_1 } from '@/style/margin.css';
import { style } from '@vanilla-extract/css';
import { Radius, gray, primary, white } from 'hoon-ds';

export const detail_box = style({
  background: white,
  borderTop: `1px solid ${gray.gray3}`,
});

export const detail_list = style({
  height: 250,
  overflowY: 'scroll',
});

export const detail_item = style([
  flx_between,
  {
    padding: '12px 8px',
  },
]);

export const plus_btn_wrap = style([
  flx_end,
  {
    padding: '9px 8px',
  },
]);

export const plus_btn = style([
  flx_center,
  mr_1,
  {
    width: 32,
    height: 32,

    background: primary.blue,
    borderRadius: Radius.MAXIMUM,
    cursor: 'pointer',

    ':hover': {
      opacity: 0.7,
    },
  },
]);
