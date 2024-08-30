import { Body, Controller, Post } from "@nestjs/common";

import { LoginMiddlewareService } from "../services/login-middleware.service";
import { UserAuthentication } from "../models/user-authentication.model";
import { User } from "../models/user.model";

@Controller("authentication")
export class LoginMiddlewareController {
  constructor(
    private readonly loginMiddlewareService: LoginMiddlewareService,
  ) {}

  @Post("login")
  async userAuthentication(
    @Body() userAuthentication: UserAuthentication,
  ): Promise<string> {
    return await this.loginMiddlewareService.userAuthentication(
      userAuthentication,
    );
  }

  @Post("create")
  async createUser(@Body() user: User): Promise<User> {
    return await this.loginMiddlewareService.createUser(user);
  }
}
