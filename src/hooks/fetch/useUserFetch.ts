import { ApiError } from '@/apis/types';
import { checkEmailApi, signUpApi } from '@/apis/user';
import { checkEmailPayload, signUpPayload } from '@/apis/user/types';
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
        console.log(error.response?.data.message);
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
        console.log(error.response?.data.message);
      },
    },
  );

  return {
    signUpMutate,
  };
};
