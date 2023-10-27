import { Icon, TypoVariant, Typography, gray, green, red, white } from 'hoon-ds';
import { detail_box, detail_item, detail_list, plus_btn, plus_btn_wrap } from './index.css';
import { useDateState } from '@/store/date';
import { useGetRecordDtailFetch } from '@/hooks/fetch/useRecordFetch';

type Props = {
  setHomeTypeForm: () => void;
};

export default function DetailBox({ setHomeTypeForm }: Props) {
  const { year, month, day } = useDateState();

  const { recordDetailData } = useGetRecordDtailFetch({ year, month, day });

  return (
    <div className={detail_box}>
      <div className={detail_list}>
        {recordDetailData?.list.map((item) => (
          <div className={detail_item} key={item.id}>
            <Typography variant={TypoVariant.B3} color={gray.gray6}>
              {item.title}
            </Typography>
            <Typography
              variant={TypoVariant.B3}
              color={{ income: red.red2, outcome: green.green3 }[item.type]}>
              {item.value.toLocaleString()}원
            </Typography>
          </div>
        ))}
      </div>

      <div className={plus_btn_wrap}>
        <div className={plus_btn} onClick={setHomeTypeForm}>
          <Icon name="plus" stroke={white} size="18px" />
        </div>
      </div>
    </div>
  );
}
