import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { AuctionService } from "../services/auction.service";

@Controller("auction")
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  async createAuction(@Body() auction: any): Promise<any> {
    return this.auctionService.createAuction(auction);
  }

  @Put("supplier/refuse/:productId")
  async refuseAuctionPropose(@Param("productId") productId: string): Promise<boolean> {
    return await this.auctionService.refuseAuctionPropose(productId);
  }

  @Put("supplier/accept/:productId")
  async acceptAuctionPropose(@Param("productId") productId: string): Promise<boolean> {
    return await this.auctionService.acceptAuctionPropose(productId);
  }

  @Get("supplier/:document")
  async fetchAuctionBySupplierDocument(@Param("document") document: string): Promise<any[]> {
    return await this.auctionService.fetchAuctionBySupplierDocument(document);
  }
}
