import { Injectable } from "@nestjs/common";
import { Products } from "../../models/products.model";
import { CustomerRepository } from "../repositories/customers.repository";
import { Feedback } from "../../models/feedback.model";

@Injectable()
export class CustomerService{

    constructor(private readonly customerRepository: CustomerRepository) {}

    async fetchProducts(): Promise<Products[]>{
        return await this.customerRepository.fetchProducts();
    }

    async fetchProductsById(id: string): Promise<Products>{
        return await this.customerRepository.fetchProductsById(id);
    }
    async fetchProductsByCategory(category: string): Promise<Products[]>{
        return await this.customerRepository.fetchProductsByCategory(category);
    }

    async createFeedback(productId: string, feedback: Feedback): Promise<boolean>{
        return await this.customerRepository.createFeedback(productId, feedback);
    }
}
