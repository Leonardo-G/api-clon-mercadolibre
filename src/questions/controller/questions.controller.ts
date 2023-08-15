import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { IsValidMongoIdPipe } from 'src/common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe';
import { QuestionsService } from '../service/questions.service';

@Controller('products')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post('/:idProduct/questions')
  createQuestion(
    @Param('idProduct', IsValidMongoIdPipe) idProduct: Types.ObjectId,
    @Body('question') question: string,
  ) {
    try {
      return this.questionsService.newQuestion(idProduct, question);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @Put(':idProduct/questions/:idQuestion')
  responseQuestion(
    @Param('idQuestion', IsValidMongoIdPipe) idQuestion: Types.ObjectId,
    @Body('response') response: string,
  ) {
    try {
      return this.questionsService.findByIdAndResponse(idQuestion, response);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @Get(':idProduct/questions')
  getQuestions(
    @Param('idProduct', IsValidMongoIdPipe) idProduct: Types.ObjectId,
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
  ) {
    try {
      console.log(limit);
      return this.questionsService.findQuestions(idProduct, skip, limit);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
