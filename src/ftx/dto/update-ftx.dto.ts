import { PartialType } from '@nestjs/mapped-types';
import { CreateFtxDto } from './create-ftx.dto';

export class UpdateFtxDto extends PartialType(CreateFtxDto) {}
