import { AxiosResponse } from 'axios';
import API from '..';
import {
  GetAccessTokenPayload,
  GetAccessTokenResponse,
  GetKakaoTokenResponse,
  LoginPayload,
  LoginResponse,
  GetKakaoTokenPayload,
  GetKakaoUserInfoPayload,
  VerifyKakaoLoginPayload,
} from './types';
import { ApiError, ApiResponse } from '../types';
import { CLIENT_ID, REDIRECT_URI } from '@/constants/routes/routes';

/**
 *  로그인 API
 *  @function loginApi
 *  @param {string} email - 이메일
 *  @param {string} password - 비밀번호
 */
export const loginApi = ({
  email,
  password,
}: LoginPayload): Promise<AxiosResponse<ApiResponse<LoginResponse>, ApiError>> => {
  return API.post(`/auth/login`, { email, password });
};

/**
 *  리프레쉬 토큰으로 엑세스 토큰 재발급 API
 *  @function getAccessTokenApi
 */
export const getAccessTokenApi = ({
  refreshToken,
}: GetAccessTokenPayload): Promise<
  AxiosResponse<ApiResponse<GetAccessTokenResponse>, ApiError>
> => {
  return API.post(`/auth/refresh`, { refreshToken });
};

/**
 *  Kakao token 발급 API
 *  @function getKakaoTokenApi
 *  @param {string} code - 카카오 인가 코드
 */
export const getKakaoTokenApi = ({
  code,
}: GetKakaoTokenPayload): Promise<AxiosResponse<GetKakaoTokenResponse, ApiError>> => {
  return API.post(
    `https://kauth.kakao.com/oauth/token`,
    {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code,
    },
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
};

/**
 *  Kakao 유저 정보 가져오기 API
 *  @function getKakaoUserInfoApi
 *  @param {string} accessToken - 카카오 엑세스 토큰
 */
export const getKakaoUserInfoApi = ({ accessToken }: GetKakaoUserInfoPayload) => {
  return API.post(
    `https://kapi.kakao.com/v2/user/me`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
};

/**
 *  Kakao 로그인 검증 API (실제 서비스의 유저인지)
 *  @function verifyKakaoLoginApi
 *  @param {string} email - 이메일
 *  @param {string} name - 이름
 */
export const verifyKakaoLoginApi = ({
  email,
  name,
}: VerifyKakaoLoginPayload): Promise<AxiosResponse<ApiResponse<LoginResponse>, ApiError>> => {
  return API.post('/auth/kakao', { email, name });
};
