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

  findAll() {
    return `This action returns all ftx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ftx`;
  }

  update(id: number, updateFtxDto: UpdateFtxDto) {
    return `This action updates a #${id} ftx`;
  }

  remove(id: number) {
    return `This action removes a #${id} ftx`;
  }
}
