import { Module } from "@nestjs/common";

import { CustomerController } from "./customers/controllers/customers.controller";
import { CustomerService } from "./customers/services/customers.service";
import { CustomerRepository } from "./customers/repositories/customers.repository";
import { SupplierController } from "./suppliers/controllers/suppliers.controller";
import { SupplierService } from "./suppliers/services/suppliers.service";
import { SupplierRepository } from "./suppliers/repositories/supplier.repository";
import { AuctionController } from "./auctions/controllers/auction.controller";
import { AuctionRepository } from "./auctions/repositories/auction.repository";
import { AuctionService } from "./auctions/services/auction.service";

@Module({
  imports: [],
  controllers: [CustomerController, SupplierController, AuctionController],
  providers: [
    CustomerService,
    CustomerRepository,
    SupplierService,
    SupplierRepository,
    AuctionRepository,
    AuctionService,
  ],
})
export class ProductsModule {}
