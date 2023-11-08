import { TypoVariant, Typography, gray, green, red } from 'hoon-ds';
import { result_box, result_item, text_red } from './index.css';
import { useGetRecordFetch } from '@/hooks/fetch/useRecordFetch';
import { useYearMonthState } from '@/store/date';
import { useGetUserInfoFetch } from '@/hooks/fetch/useUserFetch';

export default function ResultBox() {
  const { userInfoData: user } = useGetUserInfoFetch();
  const { year, month } = useYearMonthState();

  const { recordData } = useGetRecordFetch({ year, month });
  const { income, outcome, balance } = recordData ?? {};

  /**
   *  월급일 D-day 계산
   */
  const getSalaryDayCount = () => {
    if (!user?.salaryDay) return;

    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    // 이번달이 30일까지있지만 월급일을 31로 입력한경우
    const isThirty = lastDayOfMonth === 30 && user?.salaryDay === 31;
    const salaryDay = isThirty ? 30 : user?.salaryDay;

    const diff = salaryDay - today.getDate();

    return diff > 0 ? diff : diff + lastDayOfMonth;
  };

  return (
    <div className={result_box}>
      <div className={result_item}>
        수입
        <Typography variant={TypoVariant.B2} color={green.green3}>
          {income?.toLocaleString()}원
        </Typography>
      </div>
      <div className={result_item}>
        지출
        <Typography variant={TypoVariant.B2} color={red.red2}>
          {outcome?.toLocaleString()}원
        </Typography>
      </div>
      <div className={result_item}>
        잔액
        <Typography variant={TypoVariant.B2} color={gray.gray6}>
          {balance?.toLocaleString()}원
        </Typography>
      </div>
      <div className={result_item}>
        {user?.salaryDay && (
          <div>
            월급까지 ... <span className={text_red}>D-{getSalaryDayCount()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
