import { useDateActions, useDayState } from '@/store/date';
import { calendar_item, income_text, outcome_text } from './index.css';
import { RecordItem } from '@/apis/record/types';

type Props = {
  value: number | '';
  isCurrentCalendar: boolean;
  data?: RecordItem[];
};

export default function CalendarItem({ value, isCurrentCalendar, data }: Props) {
  const { day } = useDayState();
  const { handleDay } = useDateActions();

  const currentDay = new Date().getDate();

  const income = data
    ?.filter((item) => item.type === 'income')
    .reduce((acc, cur) => acc + cur.value, 0);

  const outcome = data
    ?.filter((item) => item.type === 'outcome')
    .reduce((acc, cur) => acc + cur.value, 0);

  /**
   *  캘린더 날짜 클릭
   */
  const handleDayClick = (day: '' | number) => {
    if (!day) return;

    handleDay(day);
  };

  return (
    <div
      className={calendar_item({
        isDay: !!value,
        isToday: isCurrentCalendar && value === currentDay,
        isSelect: value === day,
      })}
      onClick={() => handleDayClick(value)}>
      <span>{value || ''}</span>
      {!!income && <span className={income_text}>{income.toLocaleString()}</span>}
      {!!outcome && <span className={outcome_text}>{outcome.toLocaleString()}</span>}
    </div>
  );
}
