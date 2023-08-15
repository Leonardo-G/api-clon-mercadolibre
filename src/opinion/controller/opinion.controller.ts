import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { IsExisteUserGuard } from 'src/common/guard/is-existe-user/is-existe-user.guard';
import { IsValidMongoIdPipe } from 'src/common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe';
import { OpinionService } from '../service/opinion.service';
import { CreateOpinionDTO, UpdateOpinionDTO } from '../dto/opinion.dto';

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
      return this.opinionService.getOpinions(idProduct);
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
    @Body() createOpinionDTO: CreateOpinionDTO,
  ) {
    try {
      return this.opinionService.newOpinion(id, idProduct, createOpinionDTO);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @UseGuards(IsExisteUserGuard)
  @Put(':idProduct/opinions/:idOpinion')
  updateOpinion(
    @Param('idOpinion') idOpinion: Types.ObjectId,
    @Body() updateOpinionDTO: UpdateOpinionDTO,
  ) {
    try {
      return this.opinionService.findAndUpdate(idOpinion, updateOpinionDTO);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @UseGuards(IsExisteUserGuard)
  @Delete(':idProduct/opinions/:idOpinion')
  deleteOpinion(@Param('idOpinion') idOpinion: Types.ObjectId) {
    try {
      return this.opinionService.findAndDelete(idOpinion);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
