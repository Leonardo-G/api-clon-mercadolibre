import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SubCategory } from '../model/SubCategory.model';
import { Model, Types } from 'mongoose';
import { CreateSubCategoryDTO } from '../dto/subCategory.dto';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectModel(SubCategory.name) private subCategoryModel: Model<SubCategory>,
  ) {}

  async newSubCategory(
    subCategoryDTO: CreateSubCategoryDTO,
    idCategory: Types.ObjectId,
  ) {
    const subCategory = new this.subCategoryModel({
      category: idCategory,
      ...subCategoryDTO,
    });

    return subCategory;
  }
}
