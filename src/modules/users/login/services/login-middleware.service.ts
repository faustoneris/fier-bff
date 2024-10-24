import { Injectable } from "@nestjs/common";

import { UserAuthentication } from "../models/user-authentication.model";
import { User } from "../models/user.model";
import { LoginMiddlewareRepository } from "../repositories/login-middleware.repository";

@Injectable()
export class LoginMiddlewareService {
  constructor(
    private readonly loginMiddlewareRepository: LoginMiddlewareRepository,
  ) {}

  async createUser(user: User): Promise<User> {
    if (!user) throw new Error("Usuário inválido.");
    return await this.loginMiddlewareRepository.createUser(user);
  }

  async login(userAuthentication: UserAuthentication): Promise<any>{
    return await this.loginMiddlewareRepository.userAuthentication(userAuthentication);
  }
}
