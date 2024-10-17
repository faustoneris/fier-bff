import { Module } from '@nestjs/common';
import { CustomerController } from './customers/controllers/customers.controller';
import { CustomerService } from './customers/services/customers.service';
import { CustomerRepository } from './customers/repositories/customers.repository';
import { SupplierController } from './suppliers/controllers/suppliers.controller';
import { SupplierService } from './suppliers/services/suppliers.service';
import { SupplierRepository } from './suppliers/repositories/supplier.repository';



@Module({
  imports: [],
  controllers: [CustomerController, SupplierController],
  providers: [CustomerService, CustomerRepository, SupplierService, SupplierRepository],
})
export class ProductsModule {}
