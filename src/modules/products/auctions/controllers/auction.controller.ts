import { Body, Controller, Post } from "@nestjs/common";
import { AuctionService } from "../services/auction.service";

@Controller("auction")
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  async createAuction(@Body() auction: any): Promise<any> {
    return this.auctionService.createAuction(auction);
  }
}
