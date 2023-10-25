import { getRecordApi } from '@/apis/record';
import { GetRecordPayload } from './../../apis/record/types';
import { useQuery } from '@tanstack/react-query';
import { ApiError } from '@/apis/types';

/**
 *  해당 달의 통계 가져오기 Fetch
 *  @function useGetRecordFetch
 */
export const useGetRecordFetch = ({ year, month }: GetRecordPayload) => {
  // default 값은 현재 년도, 현재 월 (year, month가 없을경우 ''로 받음)
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString();

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
        alert(error.message);
      },
    },
  );

  return {
    recordData,
  };
};
