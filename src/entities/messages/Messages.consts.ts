import {ISortParams} from "common/models/Response.models.ts";

export enum EFilterByAuthorOption {
    All,
    I,
}

export const filterByAuthorOptions = [
    {label: 'All', value: EFilterByAuthorOption.All},
    {label: 'Only my', value: EFilterByAuthorOption.I},
];

export const USERS_MESSAGES_PER_PAGE = 5;

export const messagesSortParamsDefault: ISortParams = {_sort: 'date', _order: 'desc'}
