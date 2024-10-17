import { Injectable } from "@nestjs/common";
import { Products } from "../../models/products.model";
import axios from "axios";
import { API_BASE_URL } from "src/envoriments/envoriments";
import { Feedback } from "../../models/feedback.model";

@Injectable()
export class CustomerRepository {
    async fetchProducts(): Promise<Products[]> {
        try {
            const request = await axios.get(
                `${API_BASE_URL.PRODUCTS_CUSTOMER}`
            );
            return request.data;

        } catch (error) {
            console.log(
                `Erro na requisição de produtos: ${error}`
            );
            throw error;

        }
    }

    async fetchProductsById(id: string): Promise<Products> {
        try {
            const request = await axios.get(
                `${API_BASE_URL.PRODUCTS_CUSTOMER}/${id}`
            );
            return request.data;

        } catch (error) {
            console.log(
                `Erro na procura por id do produto: ${error}`
            );
            throw error;

        }
    }

    async fetchProductsByCategory(category: string): Promise<Products[]>{
        try {
            const request = await axios.get(
                `${API_BASE_URL.PRODUCTS_CUSTOMER}/categories/${category}`
            );
            return request.data;

        } catch (error) {
            console.log(
                `Erro na procura por categoria de produto: ${error}`
            );
            throw error;

        }
    }

    async createFeedback(productId: string, feedback: Feedback): Promise<boolean>{
        try {
            const request = await axios.put(
                `${API_BASE_URL.PRODUCTS_CUSTOMER}/feedback/${productId}`,
                feedback
            );
            return request.data;

        } catch (error) {
            console.log(
                `Erro no envio de feedback: ${error}`
            );
            throw error;
        }
    }
}