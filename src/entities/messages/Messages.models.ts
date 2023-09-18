import {IChatUser} from "entities/users/Users.models.ts";

export interface IMessage {
    id: string;
    date: string;
    text: string;
    author: IChatUser;
}

export interface IMessagesCollection extends Array<IMessage> {
}
