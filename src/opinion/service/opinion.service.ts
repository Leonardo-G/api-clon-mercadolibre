import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Opinion } from '../model/opinion.model';
import { Model, Types } from 'mongoose';
import { CreateOpinionDTO, UpdateOpinionDTO } from '../dto/opinion.dto';

@Injectable()
export class OpinionService {
  constructor(
    @InjectModel(Opinion.name) private opinionModel: Model<Opinion>,
  ) {}

  async newOpinion(
    idUser: Types.ObjectId,
    idProduct: Types.ObjectId,
    createOpinionDTO: CreateOpinionDTO,
  ) {
    const opinion = new this.opinionModel({
      idProduct,
      idUser,
      ...createOpinionDTO,
    });

    await opinion.save();

    return opinion;
  }

  async getOpinions(idProduct: Types.ObjectId) {
    const opinions = await this.opinionModel.find({ idProduct }).lean();
    return opinions;
  }

  async findAndUpdate(
    idOpinion: Types.ObjectId,
    updateOpinionDTO: UpdateOpinionDTO,
  ) {
    const opinion = await this.opinionModel
      .findByIdAndUpdate(
        idOpinion,
        {
          ...updateOpinionDTO,
        },
        { new: true },
      )
      .exec();

    return opinion;
  }

  async findAndDelete(idOpinion: Types.ObjectId) {
    await this.opinionModel.findByIdAndDelete(idOpinion);

    return { msg: 'Eliminado' };
  }
}
