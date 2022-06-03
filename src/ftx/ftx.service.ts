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

  // CountByState and CountByEntity could alternatively
  // be implemented via "ftxRepository.findAndCount", but that returns
  // more than might be desirable, given the assignment was
  // to return the count itself. A pure count will also compile
  // to a naturally faster query.
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

  // We *could* check for an empty array and throw a "not found"
  // exception for findByAccountNumber and findByEntity, but as
  // we are not searching by transactionID, it seems inappropriate.
  //
  // The empty array return indicates that no such transactions were
  // associated with a given entity ID in the data set or time range,
  // but does not conclusivly indicate that no such entity exists
  async findByAccountNumber(accountNumber: number) {
    return this.ftxRepository.find({
      where: {
        AccountNumber: accountNumber
      }
    });
  }

  async findByEntity(entityId: number) {
    return this.ftxRepository.find({
      where: {
        EntityID: entityId
      }
    });
  }
}
