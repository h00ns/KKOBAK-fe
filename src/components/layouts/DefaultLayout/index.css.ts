import { style } from '@vanilla-extract/css';
import { Radius, Shadow } from 'hoon-ds';

export const layoutStyle = style({
  width: '100%',
  maxWidth: '420px',
  margin: '0 auto',
  boxSizing: 'border-box',
  boxShadow: Shadow.MEDIUM,
  borderRadius: Radius.MEDIUM,
  background: '#5CD2E6',

  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
