import { AxiosError, AxiosResponse } from 'axios';
import API from '..';
import {
  GetAccessTokenPayload,
  GetAccessTokenResponse,
  LoginPayload,
  LoginResponse,
} from './types';
import { ApiError, ApiResponse } from '../types';

/**
 *  로그인 API
 *  @function loginApi
 *  @param {string} email - 이메일
 *  @param {string} password - 비밀번호
 */
export const loginApi = ({
  email,
  password,
}: LoginPayload): Promise<AxiosResponse<ApiResponse<LoginResponse>, AxiosError<ApiError>>> => {
  return API.post(`/auth/login`, { email, password });
};

/**
 *  리프레쉬 토큰으로 엑세스 토큰 재발급 API
 *  @function getAccessTokenApi
 */
export const getAccessTokenApi = ({
  refreshToken,
}: GetAccessTokenPayload): Promise<
  AxiosResponse<ApiResponse<GetAccessTokenResponse>, AxiosError<ApiError>>
> => {
  return API.post(`/auth/refresh`, { refreshToken });
};
