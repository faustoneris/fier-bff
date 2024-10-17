import { Module } from '@nestjs/common';

import { LoginMiddlewareController } from './controller/login-middleware.controller';
import { LoginMiddlewareService } from './services/login-middleware.service';
import { LoginMiddlewareRepository } from './repositories/login-middleware.repository';

@Module({
  imports: [],
  controllers: [LoginMiddlewareController],
  providers: [LoginMiddlewareService, LoginMiddlewareRepository],
})
export class LoginModule {}
