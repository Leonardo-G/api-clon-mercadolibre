import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { categories } from '../utils/categories';

@Injectable()
export class ValidateCategoryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!categories.includes(value))
      throw new BadRequestException('Invalid category param');

    return value;
  }
}
