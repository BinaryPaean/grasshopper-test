import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FtxService } from './ftx.service';
import { CreateFtxDto } from './dto/create-ftx.dto';
import { UpdateFtxDto } from './dto/update-ftx.dto';

@Controller('ftx')
export class FtxController {
  constructor(private readonly ftxService: FtxService) {}

  @Post()
  create(@Body() createFtxDto: CreateFtxDto) {
    return this.ftxService.create(createFtxDto);
  }

  @Get()
  findAll() {
    return this.ftxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFtxDto: UpdateFtxDto) {
    return this.ftxService.update(+id, updateFtxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ftxService.remove(+id);
  }
}
