import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Products } from "../../models/products.model";
import { SupplierService } from "../services/suppliers.service";

@Controller('supplier/product')
export class SupplierController{

    constructor(private readonly supplierService: SupplierService) {}

    @Get(':document')
    async fetchProductByDocument(@Param('document') document: string): Promise<Products[]>{
        return await this.supplierService.fetchProductByDocument(document);
    }

    @Post()
    async createProduct(@Body() product: Products): Promise<Products>{
        return await this.supplierService.createProduct(product);
    }
    
    @Delete(':productId')
    async deleteProduct(@Param('productId') productId: string): Promise<void>{
        await this.supplierService.deleteProduct(productId);
    }
}