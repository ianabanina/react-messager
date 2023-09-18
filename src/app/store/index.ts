import {configureStore} from '@reduxjs/toolkit'
import {messagesTransport} from "entities/messages/Messages.transport.ts";

export const store = configureStore({
    reducer: {
        [messagesTransport.reducerPath]: messagesTransport.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(messagesTransport.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
