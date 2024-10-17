import { Module } from "@nestjs/common";
import { LoginModule } from "./modules/login/login.module";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./modules/products/products.module";

@Module({
  imports: [ConfigModule.forRoot(), LoginModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
