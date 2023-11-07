import API from '..';
import {
  CheckEmailPayload,
  CheckEmailResponse,
  GetUserInfoResponse,
  PatchPasswordPayload,
  PatchProfileImgPayload,
  PatchSalaryDayPayload,
  SendResetCodePayload,
  SignUpPayload,
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
}: CheckEmailPayload): Promise<AxiosResponse<ApiResponse<CheckEmailResponse>, ApiError>> => {
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
export const signUpApi = ({ email, name, password }: SignUpPayload) => {
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
export const sendResetCodeApi = ({
  email,
}: SendResetCodePayload): Promise<AxiosResponse<ApiResponse<null>, ApiError>> => {
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
export const patchPasswordApi = ({ email, password, resetCode }: PatchPasswordPayload) => {
  return API.patch(`/user/password`, { email, password, resetCode });
};

/**
 *  자신의 유저 정보 가져오기 API
 *  @function getUserInfoApi
 */
export const getUserInfoApi = (): Promise<
  AxiosResponse<ApiResponse<GetUserInfoResponse>, ApiError>
> => {
  return API.get(`/user`);
};

/**
 *  월급일 변경 API
 *  @function patchSalaryDayApi
 *  @param {string} salaryDay - 월급일
 */
export const patchSalaryDayApi = ({
  salaryDay,
}: PatchSalaryDayPayload): Promise<AxiosResponse<ApiResponse<null>, ApiError>> => {
  return API.patch(`/user/salary`, { salaryDay });
};

/**
 *  프로필 이미지 변경 API
 *  @function patchProfileImgApi
 *  @param {file} profileImg - 프로필 이미지
 */
export const patchProfileImgApi = ({
  profileImg,
}: PatchProfileImgPayload): Promise<AxiosResponse<ApiResponse<null>, ApiError>> => {
  return API.patch(`/user/profile`, { profileImg });
};
