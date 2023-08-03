import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { NewCategoryDTO } from '../dto/category.dto';

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
}
