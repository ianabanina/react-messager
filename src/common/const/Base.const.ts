// TODO: Replace to ENV variables
import {IUser} from "entities/users/Users.models.ts";

export const API_BASE_URL = 'http://localhost:3000'

// TODO: Should get current user from BE
export const CURRENT_USER_ID = "4";
export const CURRENT_USER: IUser = {
    "id": CURRENT_USER_ID,
    "firstName": "Eve",
    "lastName": "Wilson"
};
