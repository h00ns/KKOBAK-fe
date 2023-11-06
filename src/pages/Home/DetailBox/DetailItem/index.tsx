import { Icon, TypoVariant, Typography, gray, green, red } from 'hoon-ds';
import { detail_item, filter_icon, icon_wrap } from './index.css';
import { RecordItem } from '@/apis/record/types';
import { useGetFilterProps } from '../../hooks/useGetFilterProps';
import { useDeleteRecordFetch } from '@/hooks/fetch/useRecordFetch';
import { Toast } from '@/utils/toast';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  data: RecordItem;
};

export default function DetailItem({ data }: Props) {
  const queryClient = useQueryClient();
  const { icon, background } = useGetFilterProps(data.filter.code, '20px');

  const color = { income: green.green3, outcome: red.red2 }[data.type];

  const { deleteRecordMutate } = useDeleteRecordFetch();

  /**
   *  record 삭제
   */
  const handleDeleteRecord = () => {
    deleteRecordMutate(
      { id: data.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['getRecord']);
          queryClient.invalidateQueries(['getRecordDetail']);
          Toast.success('삭제되었습니다.');
        },
      },
    );
  };

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
      <div className={icon_wrap} onClick={handleDeleteRecord}>
        <Icon name="close" stroke={gray.gray6} size="16px" />
      </div>
    </div>
  );
}
