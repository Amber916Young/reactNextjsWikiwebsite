import { get, post, patch, del, put } from '@/src/utils/request';

export const loadAllTagsDataAPI = () =>
    get('/web/tags');


export const loadDataByIdAPI = (id: string) =>
    get('/tags/' + id);

