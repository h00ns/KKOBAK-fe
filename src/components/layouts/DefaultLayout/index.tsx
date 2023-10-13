import { layoutStyle } from './index.css';

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return <div className={layoutStyle}>{children}</div>;
}
