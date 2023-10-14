import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getAccessTokenApi } from './auth';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

/** request */
API.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  },
);

/** response */
API.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  async function (error) {
    const config = error.config;
    const status = error.response?.status;

    // 토큰 만료
    if (status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        return await getAccessTokenApi({ refreshToken })
          .then((res) => {
            console.log(123);
            const { accessToken } = res.data.result;

            // accessToken set
            localStorage.setItem('accessToken', accessToken);

            // request 재요청
            return API(config);
          })
          .catch(() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login';
          });
      }
    }

    return Promise.reject(error);
  },
);

export default API;
