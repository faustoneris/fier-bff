import { Injectable } from "@nestjs/common";
import { AuctionRepository } from "../repositories/auction.repository";

@Injectable()
export class AuctionService {
  constructor(private readonly auctionService: AuctionRepository) {}

  async createAuction(auction: any): Promise<any> {
    return await this.auctionService.createAuction(auction);
  }
}
