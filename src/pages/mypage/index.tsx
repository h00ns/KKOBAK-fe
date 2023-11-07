import { withAuth } from '@/components/hocs/withAuth';
import { Toast } from '@/utils/toast';
import { Button, Icon, TypoVariant, Typography, white } from 'hoon-ds';
import { useNavigate } from 'react-router-dom';
import { back_icon, header, logout_icon, profile, profile_img_wrap } from './index.css';

const MyPage = () => {
  const navigate = useNavigate();

  /**
   *  로그아웃
   */
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    Toast.success('로그아웃 되었습니다.');
  };

  return (
    <div className={header}>
      <div className={back_icon} onClick={() => navigate(-1)}>
        <Icon name="chevron-left" fill="transparent" stroke={white} />
      </div>
      <div className={profile}>
        <div className={profile_img_wrap}></div>
        <Typography variant={TypoVariant.B2} color={white}>
          skjo666@gmail.com
        </Typography>
      </div>
      <div className={logout_icon} onClick={handleLogout}>
        <Icon name="logout" fill="transparent" stroke={white} />
      </div>

      <input type="file" />
      <Button text="submit" />
    </div>
  );
};

export default withAuth(MyPage);
