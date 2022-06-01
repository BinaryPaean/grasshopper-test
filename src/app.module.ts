import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FtxModule } from './ftx/ftx.module';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [UserModule, FtxModule, EntityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
