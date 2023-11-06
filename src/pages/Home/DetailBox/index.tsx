import { Icon, white } from 'hoon-ds';
import { detail_box, detail_list, plus_btn, plus_btn_wrap } from './index.css';
import { useDateState } from '@/store/date';
import { useGetRecordDtailFetch } from '@/hooks/fetch/useRecordFetch';
import DetailItem from './DetailItem';
import { useNavigate } from 'react-router-dom';
import { FORM } from '@/constants/routes/routes';

export default function DetailBox() {
  const navigate = useNavigate();
  const { year, month, day } = useDateState();

  const { recordDetailData } = useGetRecordDtailFetch({ year, month, day });

  return (
    <div className={detail_box}>
      <div className={detail_list}>
        {recordDetailData?.list.map((item) => <DetailItem data={item} key={item.id} />)}
      </div>

      <div className={plus_btn_wrap}>
        <div className={plus_btn} onClick={() => navigate(FORM)}>
          <Icon name="plus" stroke={white} size="18px" />
        </div>
      </div>
    </div>
  );
}
