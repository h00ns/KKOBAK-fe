import { Icon, white } from 'hoon-ds';
import { date_text, graph_icon, header, icon_wrapper } from './index.css';
import { useNavigate } from 'react-router-dom';
import { useYearMonthState } from '@/store/date';

export default function Header() {
  const navigate = useNavigate();

  const { year, month } = useYearMonthState();

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

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  return (
    <div className={`${header}`}>
      <div className={graph_icon} onClick={handleLogout}>
        <Icon name="logout" fill="transparent" stroke={white} />
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
