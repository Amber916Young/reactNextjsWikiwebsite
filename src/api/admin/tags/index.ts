import { get, post, patch, del, put } from '@/src/utils/request';
export const loadDataAPI = (query: any = {}) =>
    get('/tags', query);

export const loadAllDataAPI = () =>
    get('/tags/all');

    /**
 * /web/tags
 * @param id
 * @returns
 */
export const loadDataByIdAPI = (id: string) =>
    get('/tags/' + id);

/**
 * 新增
 * @param data
 * @returns
 */
export const insertAPI = (data: any) =>
    post('/tags', data);

/**
 * 根据id修改
 * @param id
 * @param data
 * @returns
 */
export const updateByIdAPI = ( data: any) =>
    put('/tags', data);

/**
 * 根据id删除
 * @param id
 * @returns
 */
export const delByIdAPI = (id: number) =>
    del('/tags/' + id);

/**
 * 删除多个
 * @param ids 多个id使用,分割
 * @returns
 */
export const delManyByIds = (ids: string) =>
    del('/tags/remove_many?ids=' + ids);


// TODO Action Log wikiactions

