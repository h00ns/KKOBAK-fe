import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getAccessTokenApi } from './auth';

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰이 필요없는 요청
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

      // refresh token 존재
      if (refreshToken) {
        try {
          const { data } = await getAccessTokenApi({ refreshToken });
          const { accessToken } = data.result;

          // accessToken set
          localStorage.setItem('accessToken', accessToken);

          // multipart/form-data => headers 추가
          const { method, url } = config;
          const multipartFormUrlList = ['/user/profile'];
          if (method === 'patch' && multipartFormUrlList.includes(url)) {
            config.headers['Content-Type'] = 'multipart/form-data';
          }

          return API(config);
        } catch {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/';
        }
      }
    }

    return Promise.reject(error.response.data);
  },
);

export default API;
