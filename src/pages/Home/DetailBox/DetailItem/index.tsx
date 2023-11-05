import { TypoVariant, Typography, gray, green, red } from 'hoon-ds';
import { detail_item, filter_icon } from './index.css';
import { RecordItem } from '@/apis/record/types';
import { useGetFilterProps } from '../../hooks/useGetFilterProps';

type Props = {
  data: RecordItem;
};

export default function DetailItem({ data }: Props) {
  const { icon, background } = useGetFilterProps(data.filter.code, '20px');

  const color = { income: green.green3, outcome: red.red2 }[data.type];

  return (
    <div className={detail_item}>
      <div className={filter_icon} style={{ background }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <Typography variant={TypoVariant.B3} color={gray.gray6}>
          {data.title}
        </Typography>
      </div>
      <Typography variant={TypoVariant.B3} color={color}>
        {data.value.toLocaleString()}원
      </Typography>
    </div>
  );
}
