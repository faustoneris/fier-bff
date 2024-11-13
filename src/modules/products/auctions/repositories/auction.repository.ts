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
}
