import { Module } from '@nestjs/common';
import { FtxService } from './ftx.service';
import { FtxController } from './ftx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ftx } from '../entities/ftx.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ftx])],
  controllers: [FtxController],
  providers: [FtxService]
})
export class FtxModule {}
