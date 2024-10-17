import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { Products } from "../../models/products.model";
import { CustomerService } from "../services/customers.service";
import { Feedback } from "../../models/feedback.model";

@Controller('customer/products')
export class CustomerController{

    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async fetchProducts(): Promise<Products[]> {
        return await this.customerService.fetchProducts();
    }

    @Get(':id')
    async fetchProductsById(@Param('id') id: string): Promise<Products>{
        return await this.customerService.fetchProductsById(id);
    }

    @Get('categories/:category')
    async fetchProductsByCategory(@Param('category') category: string): Promise<Products[]>{
        return await this.customerService.fetchProductsByCategory(category);
    }

    @Put('feedback/:productId')
    async createFeedback(@Param('productId') productId: string, @Body() feedback: Feedback): Promise<boolean>{
        return await this.customerService.createFeedback(productId, feedback);
    }
}