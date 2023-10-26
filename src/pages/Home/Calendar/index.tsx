import { useMemo } from 'react';
import { calendar_header, calendar_item, calendar_row } from './index.css';
import { useDateActions, useYearMonthState } from '@/store/date';

export default function Calendar() {
  const { year, month } = useYearMonthState();
  const { handleDay } = useDateActions();

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

  /**
   *  캘린더 날짜 클릭
   */
  const handleDayClick = (day: '' | number) => {
    if (!day) return;

    handleDay(day);
  };

  return (
    <div>
      <div className={calendar_header}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className={calendar_row}>
        {calendarList.map((day, idx) => (
          <div
            className={calendar_item({ isDay: !!day })}
            onClick={() => handleDayClick(day)}
            key={idx}>
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
}
