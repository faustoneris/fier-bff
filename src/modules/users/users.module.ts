import { Module } from "@nestjs/common";
import { UserController } from "./controller/users.controller";
import { LoginMiddlewareController } from "./login/controller/login-middleware.controller";
import { UserService } from "./services/users.service";
import { LoginMiddlewareService } from "./login/services/login-middleware.service";
import { LoginMiddlewareRepository } from "./login/repositories/login-middleware.repository";
import { UserRepository } from "./repositories/users.repository";

@Module({
    imports: [], 
    controllers: [UserController, LoginMiddlewareController], 
    providers: [
        UserService, 
        UserRepository,
        LoginMiddlewareService, 
        LoginMiddlewareRepository,
    ],
    exports: []
})
export class UserModule {}