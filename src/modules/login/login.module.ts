import { Module } from '@nestjs/common';

import { LoginMiddlewareController } from './controller/login-middleware.controller';
import { LoginMiddlewareService } from './services/login-middleware.service';

@Module({
  imports: [],
  controllers: [LoginMiddlewareController],
  providers: [LoginMiddlewareService],
})
export class LoginModule {}
