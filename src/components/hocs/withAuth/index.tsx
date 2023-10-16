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
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        navigate(LOGIN);
      }
    });

    return <Component {...props} />;
  };
