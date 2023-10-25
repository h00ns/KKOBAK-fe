import { flx_center } from '@/style/display.css';
import { text_center } from '@/style/text.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  flx_center,
  {
    padding: '16px 0',
    columnGap: 8,

    position: 'relative',
  },
]);

export const date_text = style([
  text_center,
  {
    width: 100,
    fontSize: 28,
    lineHeight: '28px',

    position: 'relative',
    top: 2,
  },
]);

export const icon_wrapper = style({
  width: 24,
  height: 24,
  cursor: 'pointer',

  ':hover': {
    opacity: 0.5,
  },
});

export const graph_icon = style([
  icon_wrapper,
  {
    position: 'absolute',
    left: 24,
  },
]);
