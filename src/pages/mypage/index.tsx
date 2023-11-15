import { withAuth } from '@/components/hocs/withAuth';
import { Toast } from '@/utils/toast';
import { Icon, TypoVariant, Typography, gray, white } from 'hoon-ds';
import { useNavigate } from 'react-router-dom';
import {
  back_icon,
  header,
  logout_icon,
  profile,
  profile_btn,
  profile_img,
  profile_img_wrap,
} from './index.css';
import { useGetUserInfoFetch, usePatchProfileImgFetch } from '@/hooks/fetch/useUserFetch';
import { useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useRef } from 'react';
import UserImg from '@/assets/images/user.png';

const MyPage = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { userInfoData: user } = useGetUserInfoFetch();
  const { profileImg, email } = user ?? {};

  const fileInputFile = useRef<HTMLInputElement>(null);

  const { patchProfileImgMutate } = usePatchProfileImgFetch();

  /**
   *  로그아웃
   */
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    Toast.success('로그아웃 되었습니다.');
  };

  const handleFileInputOpen = () => {
    fileInputFile.current?.click();
  };

  /**
   *  프로필 이미지 변경
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    patchProfileImgMutate(
      { profileImg: file },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['getUserInfo']);
          Toast.success('프로필 이미지가 변경되었습니다.');
        },
      },
    );
  };

  return (
    <div className={header}>
      <div className={back_icon} onClick={() => navigate(-1)}>
        <Icon name="chevron-left" fill="transparent" stroke={white} />
      </div>
      <div className={profile}>
        <div className={profile_img_wrap}>
          {!!user && <img className={profile_img} src={profileImg || UserImg} alt="profile-img" />}
          <div className={profile_btn} onClick={handleFileInputOpen}>
            <Icon name="plus" size="12px" stroke={gray.gray6} />
          </div>

          <input
            ref={fileInputFile}
            onChange={handleFileChange}
            type="file"
            style={{ display: 'none' }}
          />
        </div>

        <Typography variant={TypoVariant.B2} color={white}>
          {email}
        </Typography>
      </div>
      <div className={logout_icon} onClick={handleLogout}>
        <Icon name="logout" fill="transparent" stroke={white} />
      </div>
    </div>
  );
};

export default withAuth(MyPage);
