export interface IPaginationParams {
    _page: number;
    _limit?: number;
}

export interface IPaginationMeta {
    lastPage: number;
    limit: number;
    pageSize: number;
}
