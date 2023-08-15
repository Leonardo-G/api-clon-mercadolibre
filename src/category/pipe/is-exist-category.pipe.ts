import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { Types } from 'mongoose';

@Injectable()
export class IsExistCategoryPipe implements PipeTransform {
  constructor(private categoryService: CategoryService) {}

  async transform(value: string, metadata: ArgumentMetadata) {
    const category = await this.categoryService.findOneCategory(value);

    if (!category)
      throw new BadRequestException(`category by code ${value} does not exist`);

    return value;
  }
}
