import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductsDTO } from '../dto/products.dto';
import { IsExisteUserGuard } from 'src/common/guard/is-existe-user/is-existe-user.guard';
import { Types } from 'mongoose';
import { Request } from 'express';
import { IsValidMongoIdPipe } from 'src/common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe';
import { SearchQuerys } from '../dto/queryProducts.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @UseGuards(IsExisteUserGuard)
  createProduct(
    @Body() createProductsDTO: CreateProductsDTO,
    @Req() { id }: Request & { id: Types.ObjectId },
  ) {
    try {
      return this.productsService.newProduct(id, createProductsDTO);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @Get('/:id')
  getOnlyProduct(@Param('id', IsValidMongoIdPipe) id: Types.ObjectId) {
    try {
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }

  @Get()
  getProducts(@Query() searchQuerys: SearchQuerys) {
    try {
      return this.productsService.findProducts(searchQuerys);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
