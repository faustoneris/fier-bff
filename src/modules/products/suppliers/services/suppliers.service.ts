import { Injectable } from "@nestjs/common";
import { Products } from "../../models/products.model";
import { SupplierRepository } from "../repositories/supplier.repository";

@Injectable()
export class SupplierService{
    constructor(private readonly supplierRepository: SupplierRepository) {}

    async fetchProductByDocument(document: string): Promise<Products[]>{
        return await this.supplierRepository.fetchProductByDocument(document);
    }

    async createProduct(product: Products): Promise<Products>{
        return await this.supplierRepository.createProduct(product);
    }

    async deleteProduct(productId: string): Promise<void>{
        await this.supplierRepository.deleteProduct(productId);
    }
}