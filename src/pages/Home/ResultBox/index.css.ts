import { flx_between } from '@/style/display.css';
import { style } from '@vanilla-extract/css';
import { black, gray, white, red } from 'hoon-ds';

export const result_box = style({
  backgroundColor: white,

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  color: black,
});

export const result_item = style([
  flx_between,
  {
    fontSize: 14,
    padding: '4px 6px',
    selectors: {
      '&:nth-child(1)': {
        borderBottom: `1px solid ${gray.gray2}`,
      },
      '&:nth-child(2)': {
        borderBottom: `1px solid ${gray.gray2}`,
      },
    },
  },
]);

export const text_red = style({
  color: red.red4,
});
