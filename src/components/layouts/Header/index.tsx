import { Icon, white } from 'hoon-ds';
import { date_text, graph_icon, header, icon_wrapper } from './index.css';
import dayjs from 'dayjs';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const yQuery = searchParams.get('y');
  const mQuery = searchParams.get('m');

  // 유효한 year인지 확인
  const isValidYear = (y: string) => {
    const year = Number(y);
    return year > 0 && year < 10000;
  };

  // 유효한 month인지 확인
  const isValidMont = (m: string) => {
    const month = Number(m);
    return month > 0 && month < 13;
  };

  // month가 없다면 default로 현재 월
  const year = Number(isValidYear(yQuery ?? '') ? yQuery : dayjs().format('YYYY'));
  const month = Number(isValidMont(mQuery ?? '') ? mQuery : dayjs().format('M'));

  // 이전 달로 이동
  const handlePrevMonth = () => {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;

    navigate(`?y=${prevYear}&m=${prevMonth}`);
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;

    navigate(`?y=${nextYear}&m=${nextMonth}`);
  };

  return (
    <div className={`${header}`}>
      <div className={graph_icon}>
        <Icon name="menu" fill={white} stroke={white} />
      </div>
      <div className={icon_wrapper} onClick={handlePrevMonth}>
        <Icon name="chevron-left" stroke={white} />
      </div>
      <div className={date_text}>
        {year}.{month}
      </div>
      <div className={icon_wrapper} onClick={handleNextMonth}>
        <Icon name="chevron-right" stroke={white} />
      </div>
    </div>
  );
}
