import { Body, Controller, HttpException, Post, Req } from '@nestjs/common';
import { SubCategoryService } from '../services/sub-category.service';
import { CreateSubCategoryDTO } from '../dto/subCategory.dto';
import { Request } from 'express';
import { Types } from 'mongoose';

@Controller('subcategory')
export class SubCategoryController {
  constructor(private subCategoryService: SubCategoryService) {}

  @Post()
  createSubCategory(
    @Body() createSubCategoryDTO: CreateSubCategoryDTO,
    @Req() { categoryId }: Request & { categoryId: Types.ObjectId },
  ) {
    try {
      return this.subCategoryService.newSubCategory(
        createSubCategoryDTO,
        categoryId,
      );
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
