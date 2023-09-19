import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "common/const/Base.const.ts";
import {IUser} from "entities/users/Users.models.ts";

const baseUrl = '/users'

export const usersTransport = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getUser: builder.query<IUser, string>({
            query: (id) => `${baseUrl}/${id}`
        })
    })
});

export const {useGetUserQuery} = usersTransport;
