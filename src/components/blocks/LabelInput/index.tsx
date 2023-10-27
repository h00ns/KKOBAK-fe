import { flx_col } from '@/style/display.css';
import { TypoVariant, Typography, white } from 'hoon-ds';

type Props = {
  title: string;
  children: React.ReactNode;
  color?: string;
};

export default function LabelInput({ title, children, color = white }: Props) {
  return (
    <div className={flx_col} style={{ rowGap: '2px' }}>
      <Typography variant={TypoVariant.SH5} color={color}>
        {title}
      </Typography>
      {children}
    </div>
  );
}
