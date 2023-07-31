import axios from 'axios';
// @ts-ignore
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import { getToken, serverUrl } from '@/src/utils/tools';

const instance = axios.create({
  baseURL: serverUrl, // 请求的基础地址
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin':"*"
  }
});

// Add a request interceptor，发起请求之前执行
instance.interceptors.request.use(
  function (config) {
    config.headers.token = getToken();
   
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor，请求返会之后执行
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 * get请求
 * @param url     地址
 * @param params  参数
 * @returns
 */
export const get = (url: string, params: any = {}) =>
  instance.get(url, { params }).then((res) => res.data);

/**
 * post请求
 * @param url   地址
 * @param data  参数
 * @returns
 */
export const post = (url: string, data: any = {}) =>
  instance.post(url, data).then((res) => res.data);

/**
 * put请求
 * @param url   地址
 * @param data  参数
 * @returns
 */
export const put = (url: string, data: any = {}) =>
  instance.put(url, data).then((res) => res.data);

/**
 * patch请求
 * @param url   地址
 * @param data  参数
 * @returns
 */
export const patch = (url: string, data: any = {}) =>
  instance.patch(url, data).then((res) => res.data);

/**
 * delete请求
 * @param url   地址
 * @returns
 */
export const del = (url: string) =>
  instance.delete(url).then((res) => res.data);