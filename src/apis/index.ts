import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getAccessTokenApi } from './auth';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const isCancelToken = (url: string): boolean => {
  if (url === 'https://kapi.kakao.com/v2/user/me') {
    return true;
  }
  if (url.includes('auth')) {
    return true;
  }

  return false;
};

/** request */
API.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && !isCancelToken(config.url as string)) {
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
            const { accessToken } = res.data.result;

            // accessToken set
            localStorage.setItem('accessToken', accessToken);

            // request 재요청
            return API(config);
          })
          .catch(() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/';
          });
      }
    }

    return Promise.reject(error);
  },
);

export default API;
