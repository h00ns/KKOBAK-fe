import { Icon, white } from 'hoon-ds';
import { date_text, graph_icon, header, icon_wrapper } from './index.css';
import { useNavigate } from 'react-router-dom';
import { useDateActions, useYearMonthState } from '@/store/date';
import { Toast } from '@/utils/toast';

export default function Header() {
  const navigate = useNavigate();

  const { year, month } = useYearMonthState();
  const { handlePrevMonth, handleNextMonth } = useDateActions();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    Toast.success('로그아웃 되었습니다.');
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
