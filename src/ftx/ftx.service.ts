import { Injectable } from '@nestjs/common';
import { CreateFtxDto } from './dto/create-ftx.dto';
import { UpdateFtxDto } from './dto/update-ftx.dto';

@Injectable()
export class FtxService {
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
