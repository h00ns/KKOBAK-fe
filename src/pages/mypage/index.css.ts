import { flx_center, flx_r_gap_1 } from '@/style/display.css';
import { text_center } from '@/style/text.css';
import { style } from '@vanilla-extract/css';
import { Radius, white } from 'hoon-ds';

export const header = style([
  flx_center,
  {
    padding: '16px 0',

    position: 'relative',
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

export const back_icon = style([
  icon_wrap,
  {
    position: 'absolute',
    top: 16,
    left: 12,
  },
]);

export const profile = style([
  flx_r_gap_1,
  text_center,
  {
    alignItems: 'center',
  },
]);

export const profile_img_wrap = style({
  width: 72,
  height: 72,
  borderRadius: Radius.MAXIMUM,

  position: 'relative',
});

export const profile_img = style({
  width: '100%',
  height: '100%',
  borderRadius: Radius.MAXIMUM,
});

export const profile_btn = style([
  flx_center,
  {
    width: 16,
    height: 16,
    background: white,
    borderRadius: Radius.MAXIMUM,
    cursor: 'pointer',

    position: 'absolute',
    top: 52,
    right: 2,

    ':hover': {
      opacity: 0.7,
    },
  },
]);

export const logout_icon = style([
  icon_wrap,
  {
    position: 'absolute',
    top: 16,
    right: 12,
  },
]);
