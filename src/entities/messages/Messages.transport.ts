import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {
    IMessage,
    IMessagesCollection,
    IMessagesCollectionData,
    TGetMessagesParams
} from "entities/messages/Messages.models.ts";
import {API_BASE_URL} from "common/const/Base.const.ts";
import {mapChatUserDataToChatModel} from "entities/users/Users.mapper.ts";
import {IUserData, IUser} from "entities/users/Users.models.ts";

const baseUrl = '/messages'

export const messagesTransport = createApi({
    reducerPath: 'messages',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    tagTypes: ['Messages'],
    endpoints: (builder) => ({
        getMessages: builder.query<IMessagesCollection, TGetMessagesParams>({
            query: (params) => ({url: baseUrl, params}),
            transformResponse: (response: IMessagesCollectionData) => {
                // Sorting should be on BE, only for mock server
                const sorterResponse = response.reverse();

                return sorterResponse.map(message => ({...message, author: mapChatUserDataToChatModel(message.author)}))
            },
            providesTags: ['Messages'],
        }),
        addMessage: builder.mutation({
            query: (payload: IMessage<IUserData>) => ({
                url: baseUrl,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Messages'],
        }),
        setIsFavorite: builder.mutation({
                query: ({id, ...rest}: Pick<IMessage<IUser>, 'isFavorite' | 'id'>) => ({
                    url: `${baseUrl}/${id}`,
                    method: 'PATCH',
                    body: rest,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
                invalidatesTags: ['Messages']
            }
        ),
    }),
})

export const {
    useGetMessagesQuery,
    useAddMessageMutation,
    useSetIsFavoriteMutation,
} = messagesTransport;
