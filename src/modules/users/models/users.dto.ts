import { LoginType } from "../login/models/enums/user-types.enum";

export class UserDto{
    name: string;
    lastname?: string;
    fantasyName?: string;
    document: string;
    phoneNumber: number;
    password: string;
    loginType: LoginType;
    email: string;    
}