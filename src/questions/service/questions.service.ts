import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Questions } from '../model/questions.model';
import { Model, Types } from 'mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions.name) private questionsModel: Model<Questions>,
  ) {}

  async newQuestion(idProduct: Types.ObjectId, question: string) {
    const questionObj = new this.questionsModel({
      idProduct,
      question,
    });

    await questionObj.save();

    return questionObj;
  }

  async findByIdAndResponse(idQuestion: Types.ObjectId, response: string) {
    const question = await this.questionsModel
      .findByIdAndUpdate(
        idQuestion,
        {
          response,
          answered: true,
        },
        { $mew: true },
      )
      .exec();

    return question;
  }

  async findQuestions(idProduct: Types.ObjectId, skip: number, limit: number) {
    const questions = await this.questionsModel
      .find({ idProduct })
      .skip(skip)
      .limit(limit)
      .lean();

    return questions;
  }
}
