
export const defaultImg = null;

/**
 * 服务器地址
 */
export const serverUrl = 'http://localhost:8080';

/**
 * 文件上传接口
 */
export const uploadActionUrl = serverUrl + '/api/images/upload/wiki';

/**
 * 设置token
 * @param token
 * @returns
 */
export const setToken = (token: string) =>
  sessionStorage.setItem('token', token);

/**
 * 获取token
 * @returns
 */
export const getToken = () => sessionStorage.getItem('token');

/**
 * 图片处理
 * @param img
 * @returns
 */
export const dalImg = (img: string) => {
  if (img) {
    if (img.startsWith('http')) return img;
    return serverUrl + img;
  }
  return defaultImg;
};