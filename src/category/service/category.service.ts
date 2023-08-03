import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category, CategoryDocument } from '../model/category.model';
import { NewCategoryDTO } from '../dto/category.dto';
import { SubCategory } from 'src/sub-category/model/SubCategory.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    @InjectModel(SubCategory.name) private subCategoryModel: Model<SubCategory>,
  ) {}

  async newCategory(categoryDTO: NewCategoryDTO): Promise<Category> {
    const isExistCategory = await this.categoryModel
      .findOne({ code: categoryDTO.code })
      .exec();

    if (isExistCategory)
      throw new BadRequestException(
        `The category ${categoryDTO.code} is already exists`,
      );

    const category = new this.categoryModel(categoryDTO);
    await category.save();

    return category;
  }

  async findOneCategory(code: string): Promise<CategoryDocument | null> {
    const category = await this.categoryModel.findOne({ code });

    return category;
  }

  async findSubCategories( category: string ) {
    const subCategories = await this.subCategoryModel.find({ category })
  }
}
