import { Injectable } from "@nestjs/common";
import { Products } from "../../models/products.model";
import axios from "axios";
import { API_BASE_URL } from "src/envoriments/envoriments";

@Injectable()
export class SupplierRepository{
    async fetchProductByDocument(document : string): Promise<Products[]>{
        try {
            const request = await axios.get(
                `${API_BASE_URL.PRODUCTS_SUPPLIER}/${document}`
            );
            return request.data;

        } catch (error) {
            console.log(
                `Erro na procura do fornecedor: ${error}`
            );
            throw error;
        }
    }

    async createProduct(product: Products): Promise<Products>{
        try {
            const request = await axios.post(
                `${API_BASE_URL.PRODUCTS_SUPPLIER}`,
                product
            );
            return request.data

        } catch (error) {
            console.log(
                `Erro ao criar produto: ${error}`
            );
            throw error;
        }

    }

    async deleteProduct(productId: string): Promise<void>{
        try {
            await axios.delete(
                `${API_BASE_URL.PRODUCTS_SUPPLIER}/${productId}`
            );
        } catch (error) {
            console.log(
                `Erro ao deletar produto pelo ID: ${error}`
            );
            throw error;
            
        }
    }
}