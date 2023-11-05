import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { blue, gray, green, red } from 'hoon-ds';

export const calendar_item = recipe({
  base: {
    height: 60,
    padding: '8px 0 4px',
    textAlign: 'center',
    fontSize: 14,
    border: `0.5px solid ${gray.gray2}`,
    boxSizing: 'border-box',

    display: 'grid',
    rowGap: 2,

    selectors: {
      '&:nth-child(7n+1)': {
        color: red.red3,
      },
      '&:nth-child(7n)': {
        color: blue.blue3,
      },
    },
  },

  variants: {
    isDay: {
      true: {
        cursor: 'pointer',
        ':hover': {
          background: gray.gray1,
        },
      },
    },
    isToday: {
      true: {
        background: green.green1,
        ':hover': {
          background: green.green1,
        },
      },
    },
    isSelect: {
      true: {
        background: blue.blue1,
        ':hover': {
          background: blue.blue1,
        },
      },
    },
  },
});

export const income_text = style({
  color: green.green3,
  fontSize: 9,
});

export const outcome_text = style({
  color: red.red2,
  fontSize: 9,
});
