import {IChatUser} from "entities/users/Users.models.ts";

export interface IMessage {
    id: string;
    date: string;
    text: string;
    isFavorite: boolean;
    author: IChatUser;
}

export interface IMessagesCollection extends Array<IMessage> {
}
// There is an interface for a mocked server. It will be better to use interface below for production solution:
// export interface IMessagesCollection extends IResponseCollection<IMessage> {}
// interface IResponseCollection<T> {
//     data: T,
//     meta: {
//         count: number; // count of items without limit+offset
//     }
// }


export type TGetMessagesParams = { "author.id": string } | undefined;
// I'd like to use authorId instead of "author.id", but it's necessary for mocked BE. Not production solution
