import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

/** request */
API.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
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
  function (error) {
    return Promise.reject(error);
  },
);

export default API;
