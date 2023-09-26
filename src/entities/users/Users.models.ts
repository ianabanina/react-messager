export interface IChatUser extends IChatUserData, IUserMixin {
}

export interface IChatUserData {
    id: string;
    firstName: string;
    lastName: string;
}

export interface IUser extends IUserData, IUserMixin {
}

export interface IUserData {
    id: string;
    firstName: string;
    lastName: string;
}

interface IUserMixin {
    fullName: string;
    initials: string;
}
