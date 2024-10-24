import { Body, Controller, Post } from "@nestjs/common";

import { LoginMiddlewareService } from "../services/login-middleware.service";
import { UserAuthentication } from "../models/user-authentication.model";
import { User } from "../models/user.model";

@Controller("authentication")
export class LoginMiddlewareController {
  constructor(
    private readonly loginMiddlewareService: LoginMiddlewareService,
  ) {}

  @Post()
  async login(@Body() userAuthentication: UserAuthentication): Promise<any> {
      return await this.loginMiddlewareService.login(userAuthentication);
  }


}
