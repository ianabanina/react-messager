import {IChatUser} from "entities/users/Users.models.ts";
import {IPaginationMeta, IPaginationParams} from "common/models/Response.models.ts";

export interface IMessage {
    id: string;
    date: string;
    text: string;
    author: IChatUser;
}

export interface IMessagesCollection {
    data: IMessage[];
    meta?: IPaginationMeta;
}

export interface IMessagesCollectionData extends Array<IMessage> {
}

export type TGetMessagesParams = { "author.id": string } | undefined | IPaginationParams;
// I'd like to use authorId instead of "author.id", but it's necessary for mocked BE. Not production solution
