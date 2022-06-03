import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FtxModule } from './ftx/ftx.module';

@Module({
  imports: [
  FtxModule,
  //If this is moved behind a proxy, this will need additional configuration
  ThrottlerModule.forRoot({
    ttl:60,
    limit:180,
  }),
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
