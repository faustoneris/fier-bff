import { Injectable } from "@nestjs/common";
import { Products } from "../../models/products.model";
import axios from "axios";
import { API_BASE_URL } from "src/envoriments/envoriments";
import { Feedback } from "../../models/feedback.model";

@Injectable()
export class CustomerRepository {
  async fetchProducts(): Promise<Products[]> {
    const request = await axios
      .get(`${API_BASE_URL.PRODUCTS_CUSTOMER}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async fetchProductsById(id: string): Promise<Products> {
    const request = await axios
      .get(`${API_BASE_URL.PRODUCTS_CUSTOMER}/${id}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async fetchProductsByCategory(category: string): Promise<Products[]> {
    const request = await axios
      .get(`${API_BASE_URL.PRODUCTS_CUSTOMER}/categories/${category}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async createFeedback(
    productId: string,
    feedback: Feedback,
  ): Promise<boolean> {
    const request = await axios
      .put(`${API_BASE_URL.PRODUCTS_CUSTOMER}/feedback/${productId}`, feedback)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }
}
