import { Module } from "@nestjs/common";
import { LoginModule } from "./modules/login/login.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
