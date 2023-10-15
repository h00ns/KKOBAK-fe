import { style } from '@vanilla-extract/css';
import { black, white } from 'hoon-ds';

export const result_box = style({
  backgroundColor: white,

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  color: black,
});
