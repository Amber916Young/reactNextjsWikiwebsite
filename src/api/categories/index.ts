import { get, post, patch, del, put } from '@/src/utils/request';

/**
 * 获取列表
 * @param query
 * @returns
 */
export const loadAllCategoryDataAPI = (query: any = {}) =>
  get('/web/categories', query);

/**
 * 根据id获取一个
 * @param id
 * @returns
 */
export const loadDataByIdAPI = (id: string) =>
  get('/web/categories' + id);

