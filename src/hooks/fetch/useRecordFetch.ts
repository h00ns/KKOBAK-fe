import { createRecordApi, deleteRecordApi, getRecordApi, getRecordDetailApi } from '@/apis/record';
import {
  CreateRecordPayload,
  DeleteRecordPayload,
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
  const { data: recordData } = useQuery(
    ['getRecord', year, month],
    async () => {
      const result = await getRecordApi({
        year,
        month,
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
    ({ title, value, type, year, month, day, code }: CreateRecordPayload) =>
      createRecordApi({ title, value, type, year, month, day, code }),
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

/**
 *  record 삭제 Fetch
 *  @function useDeleteRecordFetch
 *  @param {number} id - record id
 */
export const useDeleteRecordFetch = () => {
  const { mutate: deleteRecordMutate } = useMutation(
    ['deleteRecord'],
    ({ id }: DeleteRecordPayload) => deleteRecordApi({ id }),
    {
      onError: (error: ApiError) => {
        Toast.error(error.message);
      },
    },
  );

  return {
    deleteRecordMutate,
  };
};
