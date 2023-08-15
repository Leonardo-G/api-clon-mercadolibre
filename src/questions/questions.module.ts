import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Questions, QuestionsSchema } from './model/questions.model';
import { QuestionsController } from './controller/questions.controller';
import { QuestionsService } from './service/questions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Questions.name, schema: QuestionsSchema },
    ]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
