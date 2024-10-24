import { LoginType } from './enums/user-types.enum';

export class User {
  private name: string;
  private lastname: string;
  private password: string;
  private loginType: LoginType;
  private phoneNumber: number;
  private email: string;

  getName(): string {
    return this.name;
  }

  getLastname(): string {
    return this.lastname;
  }

  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getLoginType(): LoginType {
    return this.loginType;
  }
}
