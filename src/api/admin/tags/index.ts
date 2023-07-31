import { get, post, patch, del, put } from '@/src/utils/request';
export const loadDataAPI = (query: any = {}) =>
    get('/api/tags', query);

export const loadAllDataAPI = () =>
    get('/api/tags/all');

/**
 *
 * @param id
 * @returns
 */
export const loadDataByIdAPI = (id: string) =>
    get('/api/tags/' + id);

/**
 * 新增
 * @param data
 * @returns
 */
export const insertAPI = (data: any) =>
    post('/api/tags', data);

/**
 * 根据id修改
 * @param id
 * @param data
 * @returns
 */
export const updateByIdAPI = ( data: any) =>
    put('/api/tags', data);

/**
 * 根据id删除
 * @param id
 * @returns
 */
export const delByIdAPI = (id: number) =>
    del('/api/tags/' + id);

/**
 * 删除多个
 * @param ids 多个id使用,分割
 * @returns
 */
export const delManyByIds = (ids: string) =>
    del('/api/tags/remove_many?ids=' + ids);


// TODO Action Log wikiactions

