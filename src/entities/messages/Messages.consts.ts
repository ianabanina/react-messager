export enum EFilterByAuthorOption {
    All,
    I,
}

export const filterByAuthorOptions = [
    {label: 'All', value: EFilterByAuthorOption.All},
    {label: 'Only my', value: EFilterByAuthorOption.I},
];

export const USERS_MESSAGES_PER_PAGE = 5;
