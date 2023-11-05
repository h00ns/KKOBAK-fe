import { createRecordApi, getRecordApi, getRecordDetailApi } from '@/apis/record';
import {
  CreateRecordPayload,
  GetRecordDetailPayload,
  GetRecordPayload,
} from './../../apis/record/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ApiError } from '@/apis/types';
import { Toast } from '@/utils/toast';

/**
 *  해당 달의 통계 가져오기 Fetch
 *  @function useGetRecordFetch
 */
export const useGetRecordFetch = ({ year, month }: GetRecordPayload) => {
  // default 값은 현재 년도, 현재 월 (year, month가 없을경우 ''로 받음)
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const { data: recordData } = useQuery(
    ['getRecord', year || currentYear, month || currentMonth],
    async () => {
      const result = await getRecordApi({
        year: year || currentYear,
        month: month || currentMonth,
      });
      return result.data.result;
    },
    {
      keepPreviousData: true,
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    recordData,
  };
};

/**
 *  record 생성 Fetch
 *  @function useCreateRecordFetch
 *  @param {string} title - 내용
 *  @param {number} value - 금액
 *  @param {'income' | 'outcome'} type - 수입/지출
 *  @param {number} year - 년도
 *  @param {number} month - 월
 *  @param {number} day - 일
 */
export const useCreateRecordFetch = () => {
  const { mutate: createRecordMutate } = useMutation(
    ['createRecord'],
    ({ title, value, type, year, month, day }: CreateRecordPayload) =>
      createRecordApi({ title, value, type, year, month, day }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    createRecordMutate,
  };
};

/**
 *  해당 일의 record 목록 조회 Fetch
 *  @function useGetRecordDetailFetch
 *  @param {number} year - 년도
 *  @param {number} month - 월
 *  @param {number} day - 일
 */
export const useGetRecordDtailFetch = ({ year, month, day }: GetRecordDetailPayload) => {
  const { data: recordDetailData } = useQuery(
    ['getRecordDetail', year, month, day],
    async () => {
      const result = await getRecordDetailApi({ year, month, day });
      return result.data.result;
    },
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return { recordDetailData };
};
