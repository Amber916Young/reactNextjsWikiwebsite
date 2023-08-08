import { get, post, patch, del, put } from '@/src/utils/request';

/**
 * 获取列表
 * @param query
 * @returns
 */
export const loadCategoryDataAPI = (query: any = {}) =>
  get('/categories', query);

/**
 * 根据id获取一个
 * @param id
 * @returns
 */
export const loadDataByIdAPI = (id: string) =>
  get('/articles/' + id);

/**
 * 新增
 * @param data
 * @returns
 */
export const insertAPI = (data: any) =>
  post('/api/articles', data);

/**
 * 根据id修改
 * @param id
 * @param data
 * @returns
 */
export const updateByIdAPI = ( data: any) =>
put('/api/articles', data);

/**
 * 根据id删除
 * @param id
 * @returns
 */
export const delByIdAPI = (id: number) =>
  del('/api/articles/' + id);

/**
 * 删除多个
 * @param ids 多个id使用,分割
 * @returns
 */
export const delManyByIds = (ids: string) =>
  del('/admin/medicine_categories/remove_many?ids=' + ids);


// TODO Action Log actions


  /**
 * 获取列表
 * @param query
 * @returns
 */
export const loadActionDataAPI = (query: any = {}) =>
get('/api/actions', query);


/**
* 新增
* @param data
* @returns
*/
export const insertActionAPI = (data: any) =>
post('/api/actions', data);

/**
* 根据id修改
* @param id
* @param data
* @returns
*/
export const updateActionByIdAPI = ( data: any) =>
put('/api/actions', data);

/**
* 根据id删除
* @param id
* @returns
*/
export const delActionByIdAPI = (id: number) =>
del('/api/actions/' + id);
