import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class IsValidMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isMongoId = Types.ObjectId.isValid(value);

    if (!isMongoId)
      throw new BadRequestException(`The ID '${value}' is not valid`);

    return value;
  }
}
