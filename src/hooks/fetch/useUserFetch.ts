import { ApiError } from '@/apis/types';
import {
  checkEmailApi,
  getUserInfoApi,
  patchPasswordApi,
  patchProfileImgApi,
  patchSalaryDayApi,
  sendResetCodeApi,
  signUpApi,
} from '@/apis/user';
import {
  CheckEmailPayload,
  PatchPasswordPayload,
  PatchProfileImgPayload,
  PatchSalaryDayPayload,
  SendResetCodePayload,
  SignUpPayload,
} from '@/apis/user/types';
import { Toast } from '@/utils/toast';
import { useMutation } from '@tanstack/react-query';

/**
 *  이메일 중복 체크 Fetch
 *  @function useCheckEmailFetch
 *  @param {string} email - 이메일
 */
export const useCheckEmailFetch = () => {
  const { mutate: checkEmailMutate } = useMutation(
    ['checkEmail'],
    ({ email }: CheckEmailPayload) => checkEmailApi({ email }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
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
    ({ email, name, password }: SignUpPayload) => signUpApi({ email, name, password }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
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
    ({ email }: SendResetCodePayload) => sendResetCodeApi({ email }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
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
    ({ email, password, resetCode }: PatchPasswordPayload) =>
      patchPasswordApi({ email, password, resetCode }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    patchPasswordMutate,
  };
};

/**
 *  자신의 유저 정보 가져오기 Fetch
 *  @function useGetUserInfoFetch
 */
export const useGetUserInfoFetch = () => {
  const { mutate: getUserInfoMutate } = useMutation(['getUserInfo'], () => getUserInfoApi(), {
    onError: (error: ApiError) => {
      Toast.error(error.message);
    },
  });

  return {
    getUserInfoMutate,
  };
};

/**
 *  월급일 변경 Fetch
 *  @function usePatchSalaryDayFetch
 *  @param {string} salaryDay - 월급일
 */
export const usePatchSalaryDayFetch = () => {
  const { mutate: patchSalaryDayMutate } = useMutation(
    ['patchSalaryDay'],
    ({ salaryDay }: PatchSalaryDayPayload) => patchSalaryDayApi({ salaryDay }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    patchSalaryDayMutate,
  };
};

/**
 *  프로필 이미지 변경 Fetch
 *  @function usePatchProfileImgFetch
 *  @param {file} profileImg - 프로필 이미지
 */
export const usePatchProfileImgFetch = () => {
  const { mutate: patchProfileImgMutate } = useMutation(
    ['patchProfileImg'],
    ({ profileImg }: PatchProfileImgPayload) => patchProfileImgApi({ profileImg }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    patchProfileImgMutate,
  };
};
