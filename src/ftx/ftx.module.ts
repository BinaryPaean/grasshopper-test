import { Module } from '@nestjs/common';
import { FtxService } from './ftx.service';
import { FtxController } from './ftx.controller';

@Module({
  controllers: [FtxController],
  providers: [FtxService]
})
export class FtxModule {}
