import { c_gap_1, flx_center } from '@/style/display.css';
import { style } from '@vanilla-extract/css';
import { Radius, gray, white } from 'hoon-ds';

export const text_btn = style({
  fontSize: '14px',
  lineHeight: '20px',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.7,
  },
});

export const google_btn = style([
  c_gap_1,
  flx_center,
  {
    padding: '9px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: Radius.MEDIUM,
    color: gray.gray6,
    cursor: 'pointer',

    border: 'none',
    background: white,

    ':hover': {
      opacity: 0.7,
    },
  },
]);
