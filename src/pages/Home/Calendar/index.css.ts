import { style } from '@vanilla-extract/css';
import { black, gray, white } from 'hoon-ds';

export const calendar_row = style({
  textAlign: 'center',
  color: black,
  background: white,
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export const calendar_header = style([
  calendar_row,
  {
    fontSize: 10,
    padding: '10px 0 4px',
    borderBottom: `1px solid ${gray.gray2}`,
  },
]);
