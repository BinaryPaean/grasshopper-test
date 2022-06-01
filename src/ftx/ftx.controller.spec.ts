import { Test, TestingModule } from '@nestjs/testing';
import { FtxController } from './ftx.controller';
import { FtxService } from './ftx.service';

describe('FtxController', () => {
  let controller: FtxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FtxController],
      providers: [FtxService],
    }).compile();

    controller = module.get<FtxController>(FtxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
