import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../model/category.model';
import { Model } from 'mongoose';
import { NewCategoryDTO } from '../dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async newCategory(categoryDTO: NewCategoryDTO): Promise<Category> {
    const isExistCategory = await this.categoryModel
      .findOne({ code: categoryDTO.code })
      .exec();
    console.log(isExistCategory);
    if (isExistCategory)
      throw new BadRequestException(
        `The category ${categoryDTO.code} is already exists`,
      );

    const category = new this.categoryModel(categoryDTO);
    await category.save();

    return category;
  }
}
