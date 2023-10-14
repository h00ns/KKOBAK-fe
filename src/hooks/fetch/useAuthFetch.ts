import { loginApi } from '@/apis/auth';
import { LoginPayload } from '@/apis/auth/types';
import { ApiError } from '@/apis/types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *  로그인 Fetch
 *  @function useLoginFetch
 *  @param {string} email - 이메일
 *  @param {string} password - 비밀번호
 */
export const useLoginFetch = () => {
  const { mutate: loginMutate } = useMutation(
    ['login'],
    ({ email, password }: LoginPayload) => loginApi({ email, password }),
    {
      onSuccess: (res) => {
        const { accessToken, refreshToken } = res.data.result;

        /**
         *  @todo 쿠키 로직으로 변경
         */
        // token set
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      },
      onError: (error: AxiosError<ApiError>) => {
        alert(error.response?.data.message);
      },
    },
  );

  return {
    loginMutate,
  };
};
