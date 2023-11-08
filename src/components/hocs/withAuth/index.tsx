import { GetUserInfoResponse } from '@/apis/user/types';
import { LOGIN } from '@/constants/routes/routes';
import { useGetMutateUserInfoFetch } from '@/hooks/fetch/useUserFetch';
import { useQueryClient } from '@tanstack/react-query';
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

    const queryClient = useQueryClient();
    const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);
    const { getUserInfoMutate } = useGetMutateUserInfoFetch();

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        navigate(LOGIN);
        return;
      }

      if (!user) {
        getUserInfoMutate(void 0, {
          onSuccess: (res) => {
            queryClient.setQueryData<GetUserInfoResponse>(['user'], res.data.result);
          },
          onError: () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate(LOGIN);
          },
        });
      }
    }, []);

    return <Component {...props} />;
  };
