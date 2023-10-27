import { useMemo } from 'react';
import { calendar_header, calendar_row } from './index.css';
import { useYearMonthState } from '@/store/date';
import { useGetRecordFetch } from '@/hooks/fetch/useRecordFetch';
import CalendarItem from './CalendarItem';

export default function Calendar() {
  const { year, month } = useYearMonthState();

  const { recordData } = useGetRecordFetch({ year, month });
  const { list: recordList } = recordData ?? {};

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  // 이번달 캘린더인지 확인
  const isCurrentCalendar = currentYear === year && currentMonth === month;

  /** 캘린더 리스트 계산 */
  const calendarList = useMemo(() => {
    const firstDay = new Date(`${year}.${month}.1`).getDay();

    const nextFirstDate = new Date(`${year}.${month + 1}.1`);
    const lastDate = new Date(nextFirstDate.setDate(nextFirstDate.getDate() - 1)).getDate();

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

  return (
    <div>
      <div className={calendar_header}>
        {['일', '월', '화', '수', '목', '금', '토'].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className={calendar_row}>
        {calendarList.map((day, idx) => (
          <CalendarItem
            value={day}
            isCurrentCalendar={isCurrentCalendar}
            data={recordList?.filter((item) => item.day === day)}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
