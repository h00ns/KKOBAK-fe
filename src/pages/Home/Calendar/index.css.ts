import { style } from '@vanilla-extract/css';
import { black, blue, gray, red, white } from 'hoon-ds';

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

export const calendar_item = style({
  height: 60,
  padding: '8px 0 4px',
  textAlign: 'center',
  fontSize: 14,
  border: `0.5px solid ${gray.gray2}`,
  boxSizing: 'border-box',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: gray.gray1,
  },
  selectors: {
    '&:nth-child(7n+1)': {
      color: red.red3,
    },
    '&:nth-child(7n)': {
      color: blue.blue3,
    },
  },
});
