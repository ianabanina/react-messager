export interface IPaginationParams {
    _page: number;
    _limit?: number;
}

export interface IPagination {
    lastPage: number;
    limit: number;
    pageSize: number;
    page: number;
}

export interface ISortParams {
    _sort: string;
    _order?: string;
}
