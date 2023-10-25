import { queryFilter } from '@/utils/api';
import API from '..';
import { ApiError, ApiResponse } from '../types';
import { GetRecordPayload, GetRecordResponse } from './types';
import { AxiosResponse } from 'axios';

/**
 *  해당 달의 통계 조회 API
 *  @function getRecordApi
 */
export const getRecordApi = ({
  year,
  month,
}: GetRecordPayload): Promise<AxiosResponse<ApiResponse<GetRecordResponse>, ApiError>> => {
  return API.get(`/record`, {
    params: queryFilter({ year, month }),
  });
};
