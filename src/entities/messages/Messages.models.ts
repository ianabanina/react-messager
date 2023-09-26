import {IChatUserData, IChatUser} from "entities/users/Users.models.ts";

export interface IMessage<T> {
    id: string;
    date: string;
    text: string;
    isFavorite: boolean;
    author: T;
}

export interface IMessagesCollection extends Array<IMessage<IChatUser>> {
}

// There is an interface for a mocked server. It will be better to use interface below for production solution:
// export interface IMessagesCollection extends IResponseCollection<IMessage> {}
// interface IResponseCollection<T> {
//     data: T,
//     meta: {
//         count: number; // count of items without limit+offset
//     }
// }

export interface IMessagesCollectionData extends Array<IMessage<IChatUserData>> {
}


export type TGetMessagesParams = { "author.id": string } | undefined;
// I'd like to use authorId instead of "author.id", but it's necessary for mocked BE. Not production solution
