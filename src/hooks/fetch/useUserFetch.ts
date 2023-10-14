import { ApiError } from '@/apis/types';
import { checkEmailApi, patchPasswordApi, sendResetCodeApi, signUpApi } from '@/apis/user';
import {
  checkEmailPayload,
  patchPasswordPayload,
  sendResetCodePayload,
  signUpPayload,
} from '@/apis/user/types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *  이메일 중복 체크 Fetch
 *  @function useCheckEmailFetch
 *  @param {string} email - 이메일
 */
export const useCheckEmailFetch = () => {
  const { mutate: checkEmailMutate } = useMutation(
    ['checkEmail'],
    ({ email }: checkEmailPayload) => checkEmailApi({ email }),
    {
      onError: (error: AxiosError<ApiError>) => {
        alert(error.response?.data.message);
      },
    },
  );

  return {
    checkEmailMutate,
  };
};

/**
 *  회원가입 Fetch
 *  @function useSignUpFetch
 *  @param {string} email - 이메일
 *  @param {string} name - 이름
 *  @param {string} password - 비밀번호
 */
export const useSignUpFetch = () => {
  const { mutate: signUpMutate } = useMutation(
    ['signUp'],
    ({ email, name, password }: signUpPayload) => signUpApi({ email, name, password }),
    {
      onError: (error: AxiosError<ApiError>) => {
        alert(error.response?.data.message);
      },
    },
  );

  return {
    signUpMutate,
  };
};

/**
 *  비밀번호 재설정 메일 발송 API
 *  @function useSendResetCodeFetch
 *  @param {string} email - 이메일
 */
export const useSendResetCodeFetch = () => {
  const { mutate: sendResetCodeMutate } = useMutation(
    ['sendResetCode'],
    ({ email }: sendResetCodePayload) => sendResetCodeApi({ email }),
    {
      onError: (error: AxiosError<ApiError>) => {
        alert(error.response?.data.message);
      },
    },
  );

  return {
    sendResetCodeMutate,
  };
};

/**
 *  비밀번호 재설정 Fetch
 *  @function usePatchPasswordFetch
 *  @param {string} email - 이메일
 *  @param {string} password - 비밀번호
 *  @param {string} resetCode - 재설정 코드
 */
export const usePatchPasswordFetch = () => {
  const { mutate: patchPasswordMutate } = useMutation(
    ['patchPassword'],
    ({ email, password, resetCode }: patchPasswordPayload) =>
      patchPasswordApi({ email, password, resetCode }),
    {
      onError: (error: AxiosError<ApiError>) => {
        alert(error.response?.data.message);
      },
    },
  );

  return {
    patchPasswordMutate,
  };
};
