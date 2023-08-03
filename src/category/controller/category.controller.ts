import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
} from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { NewCategoryDTO } from '../dto/category.dto';
import { Request } from 'express';
import { Types } from 'mongoose';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  createCategory(@Body() newCategoryDTO: NewCategoryDTO) {
    try {
      return this.categoryService.newCategory(newCategoryDTO);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get(':categoryId/subcategories')
  getSubcategoriesOfCategories(
    @Req() { categoryId }: Request & { categoryId: Types.ObjectId },
  ) {
    try {
      return this.categoryService.findSubCategories(categoryId);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
