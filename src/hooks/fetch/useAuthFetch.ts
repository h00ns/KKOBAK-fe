import { getKakaoTokenApi, getKakaoUserInfoApi, loginApi, verifyKakaoLoginApi } from '@/apis/auth';
import { GetKakaoTokenPayload, LoginPayload } from '@/apis/auth/types';
import { ApiError } from '@/apis/types';
import { HOME } from '@/constants/routes/routes';
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

/**
 *  Kakao Oauth 로그인 Fetch
 *  @function useKakaoLoginFetch
 *  @param {string} code - 카카오 인가 코드
 */
export const useKakaoLoginFetch = () => {
  const { mutate: kakaoLoginMutate } = useMutation(
    ['kakaoLogin'],
    ({ code }: GetKakaoTokenPayload) => getKakaoTokenApi({ code }),
    {
      onSuccess: async (res) => {
        const { access_token } = res.data;

        // 카카오 유저 정보
        const userResponse = await getKakaoUserInfoApi({ accessToken: access_token });

        const email = userResponse.data.kakao_account.email;
        const name = userResponse.data.kakao_account.profile.nickname;

        // 서비스 토큰 발급
        const tokenResponse = await verifyKakaoLoginApi({ email, name });

        // 토큰 set
        const { accessToken, refreshToken } = tokenResponse.data.result;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        window.location.href = HOME;
      },
    },
  );

  return {
    kakaoLoginMutate,
  };
};
