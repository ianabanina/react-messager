import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "common/const/Base.const.ts";
import {IUserData, IUser} from "entities/users/Users.models.ts";
import {mapUserDataToModel} from "entities/users/Users.mapper.ts";

const baseUrl = '/users'

export const usersTransport = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getUser: builder.query<IUser, string>({
            query: (id) => `${baseUrl}/${id}`,
            transformResponse(response: IUserData): Promise<IUser> | IUser {
                return mapUserDataToModel(response);
            },
        }),
    })
});

export const {useGetUserQuery} = usersTransport;
