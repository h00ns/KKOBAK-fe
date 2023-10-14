import API from '..';
import { checkEmailPayload, signUpPayload } from './types';

/**
 *  이메일 중복 체크 API
 *  @function checkEmailApi
 *  @param {string} email - 이메일
 */
export const checkEmailApi = ({ email }: checkEmailPayload) => {
  return API.post(`/user/email`, { email });
};

/**
 *  회원가입 API
 *  @function signUpApi
 *  @param {string} email - 이메일
 *  @param {string} name - 이름
 *  @param {string} password - 비밀번호
 */
export const signUpApi = ({ email, name, password }: signUpPayload) => {
  return API.post(`/user/signup`, { email, name, password });
};
