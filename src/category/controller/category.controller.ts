import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { NewCategoryDTO } from '../dto/category.dto';
import { Types } from 'mongoose';
import { ValidateCategoryPipe } from 'src/user/pipe/validate-category.pipe';

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

  @Get(':codeCategory/subcategories')
  getSubcategoriesOfCategories(
    @Param('codeCategory', new ValidateCategoryPipe())
    categoryId: string,
  ) {
    try {
      return this.categoryService.findSubCategoriesOfCategory(categoryId);
    } catch (error) {
      throw new HttpException(error.msg, error.status);
    }
  }
}
