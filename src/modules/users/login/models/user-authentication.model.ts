import { LoginType } from './enums/user-types.enum';

export type UserAuthentication = {
  document: string;
  loginType: LoginType;
  password: string;
}
