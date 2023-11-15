import { getUserInfoApi } from '@/apis/user';
import { LOGIN } from '@/constants/routes/routes';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 *  @hocs
 *  회원 페이지에선 토큰이 없다면 login으로 이동
 */
export const withAuth =
  (Component: ComponentType) =>
  // eslint-disable-next-line react/display-name
  <P extends object>(props: P) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkLoginStatus = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        // 토큰 X => 로그인 페이지로
        if (!accessToken || !refreshToken) {
          navigate(LOGIN);
          return;
        }

        const result = await getUserInfoApi();
        const user = result.data.result;

        if (!user) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          navigate(LOGIN);
        }
      };

      checkLoginStatus();
    }, []);

    return <Component {...props} />;
  };
