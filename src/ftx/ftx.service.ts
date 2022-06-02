import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFtxDto } from './dto/create-ftx.dto';
import { UpdateFtxDto } from './dto/update-ftx.dto';
import { Ftx } from '../entities/ftx.entity';

@Injectable()
export class FtxService {
  constructor(
    @InjectRepository(Ftx)
    private readonly ftxRepository: Repository<Ftx>,) {}

  create(createFtxDto: CreateFtxDto) {
    return 'This action adds a new ftx';
  }

  async CountByState(id: string) {
    return await this.ftxRepository.count({
      where: {
        State: id
      }
    });
  }

  async CountByEntity(id: number) {
    return await this.ftxRepository.count({
      where: {
        EntityID: id
      }
    });
  }

  findByAccountNumber(accountNumber: number) {
    return this.ftxRepository.find({
      where: {
        AccountNumber: accountNumber
      }
    });
  }

  findByEntity(entityId: number) {
    return this.ftxRepository.find({
      where: {
        EntityID: entityId
      }
    });
  }
}
