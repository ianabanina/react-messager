import {IChatUser} from "entities/users/Users.models.ts";
import {IPagination, IPaginationParams, ISortParams} from "common/models/Response.models.ts";

export interface IMessage {
    id: string;
    date: string;
    text: string;
    author: IChatUser;
}

export interface IMessagesCollection {
    data: IMessage[];
    meta?: IPagination;
}

export interface IMessagesCollectionData extends Array<IMessage> {
}

interface IGetMessagesParams {
    authorId?: string,
}

export type TGetMessagesParams = Partial<IGetMessagesParams> & Partial<IPaginationParams> & Partial<ISortParams> | undefined;

interface IGetMessagesParamsData {
    "author.id"?: string;
}

export type TGetMessagesParamsData = Partial<IGetMessagesParamsData> & Partial<IPaginationParams> & Partial<ISortParams> | undefined;
