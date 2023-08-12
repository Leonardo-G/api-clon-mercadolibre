import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Opinion, OpinionSchema } from './model/opinion.model';
import { OpinionController } from './controller/opinion.controller';
import { OpinionService } from './service/opinion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Opinion.name,
        schema: OpinionSchema,
      },
    ]),
  ],
  controllers: [OpinionController],
  providers: [OpinionService],
})
export class OpinionModule {}
