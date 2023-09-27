import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {
    IMessage,
    IMessagesCollection,
    TGetMessagesParams
} from "entities/messages/Messages.models.ts";
import {API_BASE_URL} from "common/const/Base.const.ts";
import {mapMessagesCollectionData} from "entities/messages/Messages.mappers.ts";
import {messagesSortParamsDefault} from "entities/messages/Messages.consts.ts";

const baseUrl = '/messages'

export const messagesTransport = createApi({
    reducerPath: 'messages',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    tagTypes: ['Messages'],
    endpoints: (builder) => ({
        getMessages: builder.query<IMessagesCollection, TGetMessagesParams>({
            query: (params) => ({url: baseUrl, params: {...messagesSortParamsDefault, ...params,}}),
            transformResponse: mapMessagesCollectionData,
            providesTags: ['Messages'],
        }),
        addMessage: builder.mutation({
            query: (payload: IMessage) => ({
                url: baseUrl,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Messages'],
        }),
    }),
})

export const {useGetMessagesQuery, useAddMessageMutation} = messagesTransport;
