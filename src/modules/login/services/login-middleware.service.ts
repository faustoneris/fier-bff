import { Injectable } from "@nestjs/common";

import { UserAuthentication } from "../models/user-authentication.model";
import { User } from "../models/user.model";
import { LoginMiddlewareRepository } from "../repositories/login-middleware.repository";

@Injectable()
export class LoginMiddlewareService {
  constructor(
    private readonly loginMiddlewareRepository: LoginMiddlewareRepository,
  ) {}

  async userAuthentication(user: UserAuthentication): Promise<string> {
    if (!user) throw new Error("User inválido");
    return null;
  }

  async createUser(user: User): Promise<User> {
    if (!user) throw new Error("Usuário inválido.");
    return await this.loginMiddlewareRepository.createUser(user);
  }
}
