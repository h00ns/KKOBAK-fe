import API from '..';
import {
  checkEmailPayload,
  checkEmailResponse,
  patchPasswordPayload,
  sendResetCodePayload,
  signUpPayload,
} from './types';
import { AxiosResponse } from 'axios';
import { ApiError, ApiResponse } from '../types';

/**
 *  이메일 중복 체크 API
 *  @function checkEmailApi
 *  @param {string} email - 이메일
 */
export const checkEmailApi = ({
  email,
}: checkEmailPayload): Promise<AxiosResponse<ApiResponse<checkEmailResponse>, ApiError>> => {
  return API.post(`/user/email`, {
    email,
  });
};

/**
 *  회원가입 API
 *  @function signUpApi
 *  @param {string} email - 이메일
 *  @param {string} name - 이름
 *  @param {string} password - 비밀번호
 */
export const signUpApi = ({ email, name, password }: signUpPayload) => {
  return API.post(`/user`, {
    email,
    name,
    password,
  });
};

/**
 *  비밀번호 재설정 메일 발송 API
 *  @function sendResetCodeApi
 *  @param {string} email - 이메일
 */
export const sendResetCodeApi = ({ email }: sendResetCodePayload) => {
  return API.post(`/user/reset`, {
    email,
  });
};

/**
 *  비밀번호 재설정 API
 *  @function patchPasswordApi
 *  @param {string} email - 이메일
 *  @param {string} password - 비밀번호
 *  @param {string} resetCode - 재설정 코드
 */
export const patchPasswordApi = ({ email, password, resetCode }: patchPasswordPayload) => {
  return API.patch(`/user/password`, { email, password, resetCode });
};
