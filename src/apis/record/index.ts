import { queryFilter } from '@/utils/api';
import API from '..';
import { ApiError, ApiResponse } from '../types';
import {
  CreateRecordPayload,
  DeleteRecordPayload,
  GetRecordDetailPayload,
  GetRecordDetailResponse,
  GetRecordPayload,
  GetRecordResponse,
} from './types';
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

/**
 *  record 생성 API
 *  @function createRecordApi
 *  @param {string} title - 내용
 *  @param {number} value - 금액
 *  @param {'income' | 'outcome'} type - 수입/지출
 *  @param {number} year - 년도
 *  @param {number} month - 월
 *  @param {number} day - 일
 *  @param {numbe} code - filter code
 */
export const createRecordApi = ({
  title,
  value,
  type,
  year,
  month,
  day,
  code,
}: CreateRecordPayload): Promise<AxiosResponse<ApiResponse<null>, ApiError>> => {
  return API.post(`/record`, { title, value, type, year, month, day, code });
};

/**
 *  해당 일의 record 목록 조회 API
 *  @function getRecordDetailApi
 *  @param {number} year - 년도
 *  @param {number} month - 월
 *  @param {number} day - 일
 */
export const getRecordDetailApi = ({
  year,
  month,
  day,
}: GetRecordDetailPayload): Promise<
  AxiosResponse<ApiResponse<GetRecordDetailResponse>, ApiError>
> => {
  return API.get(`/record/detail`, {
    params: queryFilter({ year, month, day }),
  });
};

/**
 *  record 삭제 API
 *  @function deleteRecordApi
 *  @param {number} id - record id
 */
export const deleteRecordApi = ({
  id,
}: DeleteRecordPayload): Promise<AxiosResponse<ApiResponse<null>, ApiError>> => {
  return API.delete(`/record/${id}`);
};
