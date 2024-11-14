import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { AuctionService } from "../services/auction.service";

@Controller("auction")
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  async createAuction(@Body() auction: any): Promise<any> {
    return this.auctionService.createAuction(auction);
  }

  @Put("supplier/refuse/:productId")
  async refuseAuctionPropose(@Param() productId: string): Promise<boolean> {
    return await this.auctionService.refuseAuctionPropose(productId);
  }

  @Put("supplier/accept/:productId")
  async acceptAuctionPropose(@Param() productId: string): Promise<boolean> {
    return await this.auctionService.acceptAuctionPropose(productId);
  }
}
