import {IChatUserData, IChatUser, IUserData, IUser} from "entities/users/Users.models.ts";

export function mapUserDataToModel(data: IUserData): IUser {
    return {
        ...data,
        fullName: `${data.firstName} ${data.lastName}`,
        initials: `${data.firstName.charAt(0)}${data.lastName.charAt(0)}`
    };
}

export function mapChatUserDataToChatModel(data: IChatUserData): IChatUser {
    return {
        ...data,
        fullName: `${data.firstName} ${data.lastName}`,
        initials: `${data.firstName.charAt(0)}${data.lastName.charAt(0)}`
    };
}
