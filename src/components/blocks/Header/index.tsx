import { Icon, white } from 'hoon-ds';
import { date_text, header, icon_wrap, menu_icon, profile, profile_img } from './index.css';
import { useNavigate } from 'react-router-dom';
import { useDateActions, useYearMonthState } from '@/store/date';
import { MY_PAGE, STATISTICS } from '@/constants/routes/routes';
import { useGetUserInfoFetch } from '@/hooks/fetch/useUserFetch';
import UserImg from '@/assets/images/user.png';

type Props = {
  pageType: 'home' | 'statistics';
};

export default function Header({ pageType }: Props) {
  const navigate = useNavigate();

  const { userInfoData: user } = useGetUserInfoFetch();
  const { year, month } = useYearMonthState();
  const { handlePrevMonth, handleNextMonth } = useDateActions();

  return (
    <div className={header}>
      {/* only 홈 (통계 페이지로) */}
      {pageType === 'home' && (
        <div className={menu_icon} onClick={() => navigate(STATISTICS)}>
          <Icon name="menu" fill={white} stroke={white} />
        </div>
      )}
      {/* only 홈 end */}

      {/* only 통계 페이지 (뒤로가기) */}
      {pageType === 'statistics' && (
        <div className={menu_icon} onClick={() => navigate(-1)}>
          <Icon name="chevron-left" stroke={white} />
        </div>
      )}
      {/* only 통계 페이지 end */}

      <div className={icon_wrap} onClick={handlePrevMonth}>
        <Icon name="chevron-left" stroke={white} />
      </div>
      <div className={date_text}>
        {year}.{month}
      </div>
      <div className={icon_wrap} onClick={handleNextMonth}>
        <Icon name="chevron-right" stroke={white} />
      </div>
      <div className={profile} onClick={() => navigate(MY_PAGE)}>
        {!!user && (
          <img className={profile_img} src={user?.profileImg ?? UserImg} alt="profile-img" />
        )}
      </div>
    </div>
  );
}
