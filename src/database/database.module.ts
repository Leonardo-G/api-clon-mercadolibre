import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IEnvironment } from 'src/common/interfaces/environment.interface';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<IEnvironment>('environment').mongo,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
