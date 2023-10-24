import { HOME } from '@/constants/routes/routes';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 *  @hocs
 *  비회원 페이지에선 토큰이 있다면 home으로 이동
 */
export const withUnAuth =
  (Component: ComponentType) =>
  // eslint-disable-next-line react/display-name
  <P extends object>(props: P) => {
    const navigate = useNavigate();

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (accessToken && refreshToken) {
        navigate(HOME);
      }
    });

    return <Component {...props} />;
  };
