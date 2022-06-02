import { Controller, Get, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { FtxService } from './ftx.service';
import { CreateFtxDto } from './dto/create-ftx.dto';
import { UpdateFtxDto } from './dto/update-ftx.dto';

@Controller('v1/transactions')
export class FtxController {
  constructor(private readonly ftxService: FtxService) {}

  @Get('count-by-state/:stateShortcode')
  async CountByState(@Param('stateShortcode') stateShortcode: string): Promise<any> {
    return {
      count: await this.ftxService.CountByState(stateShortcode)
    };
  }

  @Get('count-by-entity/:entityID')
  async CountByEntity(@Param('entityID') entityID: number): Promise<any> {
    return {
      count: await this.ftxService.CountByEntity(entityID),
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('by-account/:accountNumber')
  async findByAccountNumber(@Param('accountNumber') accountNumber: number): Promise<any> {
    return await this.ftxService.findByAccountNumber(accountNumber);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('by-entity/:entityID')
  async findByEntity(@Param('entityID') entityId: number): Promise<any> {
    return await this.ftxService.findByEntity(entityId);
  }

}
