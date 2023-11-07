import { calendar_header, calendar_row } from './index.css';
import { useYearMonthState } from '@/store/date';
import { useGetRecordFetch } from '@/hooks/fetch/useRecordFetch';
import CalendarItem from './CalendarItem';
import { useGetCalendarList } from '../hooks/useGetCalendarList';

export default function Calendar() {
  const { year, month } = useYearMonthState();

  const { recordData } = useGetRecordFetch({ year, month });
  const { list: recordList } = recordData ?? {};

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  // 이번달 캘린더인지 확인
  const isCurrentCalendar = currentYear === year && currentMonth === month;

  /** 캘린더 리스트 계산 */
  const calendarList = useGetCalendarList(year, month);

  return (
    <div>
      <div className={calendar_header}>
        {['일', '월', '화', '수', '목', '금', '토'].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className={calendar_row}>
        {calendarList?.map((day, idx) => (
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
