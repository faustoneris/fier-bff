import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./modules/products/products.module";
import { UserModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule, 
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
