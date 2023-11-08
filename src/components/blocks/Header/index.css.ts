import { Radius, blue } from 'hoon-ds';
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

export const icon_wrap = style({
  width: 24,
  height: 24,
  cursor: 'pointer',

  ':hover': {
    opacity: 0.5,
  },
});

export const menu_icon = style([
  icon_wrap,
  {
    position: 'absolute',
    left: 12,
  },
]);

export const profile = style({
  width: 32,
  height: 32,
  cursor: 'pointer',

  position: 'absolute',
  right: 12,
});

export const profile_img = style({
  width: '100%',
  height: '100%',
  borderRadius: Radius.MAXIMUM,
});
