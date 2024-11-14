import { Injectable } from "@nestjs/common";
import { AuctionRepository } from "../repositories/auction.repository";

@Injectable()
export class AuctionService {
  constructor(private readonly auctionRepository: AuctionRepository) {}

  async createAuction(auction: any): Promise<any> {
    return await this.auctionRepository.createAuction(auction);
  }

  async refuseAuctionPropose(productId: string): Promise<boolean> {
    return await this.auctionRepository.refuseAuctionPropose(productId);
  }

  async acceptAuctionPropose(productId: string): Promise<boolean> {
    return await this.auctionRepository.acceptAuctionPropose(productId);
  }

  async fetchAuctionBySupplierDocument(document: string): Promise<any[]> {
    return await this.auctionRepository.fetchAuctionBySupplierDocument(document);
  }
}
