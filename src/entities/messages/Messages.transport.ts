import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IMessagesCollection} from "entities/messages/Messages.models.ts";
import {API_BASE_URL} from "common/const/Base.const.ts";

const baseUrl = '/messages'

export const messagesTransport = createApi({
    reducerPath: 'messages',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getMessages: builder.query<IMessagesCollection, void>({
            query: () => baseUrl
        }),
    }),
})

export const {useGetMessagesQuery} = messagesTransport;
