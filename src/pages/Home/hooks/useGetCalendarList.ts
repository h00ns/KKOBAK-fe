import { useMemo } from 'react';

/**
 *  해당 월의 달력 리스트를 반환하는 hook
 */
export const useGetCalendarList = (year: number, month: number) => {
  const result = useMemo(() => {
    const firstDay = new Date(`${year}.${month}.1`).getDay();

    const nextFirstDate = new Date(`${year}.${month + 1}.1`);
    const lastDate = new Date(nextFirstDate.setDate(nextFirstDate.getDate() - 1)).getDate();

    // 7 (월화수목금토일) * 5 = 35칸, 빈 칸은 ''로 채워준다.
    const result: Array<'' | number> = [];

    for (let i = 0; i < 35; i++) {
      if (i < firstDay) {
        result.push('');
      } else {
        const date = i - firstDay + 1;
        if (date > lastDate) {
          result.push('');
        } else {
          result.push(date);
        }
      }
    }

    return result;
  }, [year, month]);

  return result;
};
