import {
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { IsExisteUserGuard } from 'src/common/guard/is-existe-user/is-existe-user.guard';
import { IsValidMongoIdPipe } from 'src/common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe';
import { OpinionService } from '../service/opinion.service';

// Usamos "/products" para reflejar la relación entre productos y opiniones.
// Esto ayuda a comprender fácilmente que estamos tratando con opiniones
//específicas de un producto, siguiendo buenas prácticas de diseño REST.
@Controller('products')
export class OpinionController {
  constructor(private opinionService: OpinionService) {}

  @Get(':idProduct/opinions')
  getOpinions(
    @Param('idProduct', new IsValidMongoIdPipe()) idProduct: Types.ObjectId,
  ) {
    try {
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @UseGuards(IsExisteUserGuard)
  @Post(':idProduct/opinions')
  createOpinion(
    @Param('idProduct', new IsValidMongoIdPipe())
    idProduct: Types.ObjectId,
    @Req() { id }: Request & { id: Types.ObjectId }, // ID by User
  ) {
    try {
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
