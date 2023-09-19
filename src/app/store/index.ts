import {configureStore} from '@reduxjs/toolkit'
import {messagesTransport} from "entities/messages/Messages.transport.ts";
import {usersTransport} from "entities/users/Users.trsnaport.ts";

export const store = configureStore({
    reducer: {
        [messagesTransport.reducerPath]: messagesTransport.reducer,
        [usersTransport.reducerPath]: usersTransport.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([messagesTransport.middleware, usersTransport.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
