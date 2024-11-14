import { Injectable } from "@nestjs/common";
import axios from "axios";
import { API_BASE_URL } from "src/envoriments/envoriments";

@Injectable()
export class AuctionRepository {
  async createAuction(auction: any): Promise<any> {
    const request = await axios
      .post(`${API_BASE_URL.PRODUCTS_AUCTION}`, auction)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async refuseAuctionPropose(productId: string): Promise<boolean> {
    const request = await axios
      .put(`${API_BASE_URL.PRODUCTS_AUCTION}/supplier/refused/${productId}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async acceptAuctionPropose(productId: string): Promise<boolean> {
    const request = await axios
      .put(`${API_BASE_URL.PRODUCTS_AUCTION}/supplier/accept/${productId}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }

  async fetchAuctionBySupplierDocument(document: string): Promise<any[]> {
    const request = await axios
      .get(`${API_BASE_URL.PRODUCTS_AUCTION}/supplier/${document}`)
      .catch((x) => {
        throw x.response.data;
      });
    return request.data;
  }
}
