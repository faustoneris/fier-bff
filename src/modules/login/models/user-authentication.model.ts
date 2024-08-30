import { LoginType } from './enums/user-types.enum';

export class UserAuthentication {
  private document: string;
  private loginType: LoginType;
  private password: string;

  getDocument(): string {
    return this.document;
  }

  getLoginType(): LoginType {
    return this.loginType;
  }

  getPassword(): string {
    return this.password;
  }
}
