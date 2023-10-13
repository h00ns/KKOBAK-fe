import { style } from '@vanilla-extract/css';

export const text_button = style({
  fontSize: '14px',
  lineHeight: '20px',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.7,
  },
});
