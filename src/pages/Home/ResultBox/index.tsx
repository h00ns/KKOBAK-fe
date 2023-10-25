import { TypoVariant, Typography, gray, green, red } from 'hoon-ds';
import { result_box, result_item, text_red } from './index.css';
import { GetUserInfoResponse } from '@/apis/user/types';
import { useQueryClient } from '@tanstack/react-query';
import { useGetRecordFetch } from '@/hooks/fetch/useRecordFetch';
import { useSearchParams } from 'react-router-dom';

export default function ResultBox() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);

  const [searchParams] = useSearchParams();
  const year = searchParams.get('y') ?? '';
  const month = searchParams.get('m') ?? '';

  const { recordData } = useGetRecordFetch({ year, month });

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
          0원
        </Typography>
      </div>
      <div className={result_item}>
        지출
        <Typography variant={TypoVariant.B2} color={red.red2}>
          0원
        </Typography>
      </div>
      <div className={result_item}>
        잔액
        <Typography variant={TypoVariant.B2} color={gray.gray6}>
          0원
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
