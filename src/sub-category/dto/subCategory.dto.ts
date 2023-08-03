import { Types } from 'mongoose';
import { IsMongoId, IsString } from 'class-validator';

export class CreateSubCategoryDTO {
  @IsMongoId()
  category: Types.ObjectId;

  @IsString()
  code: string;

  @IsString()
  title: string;

  @IsString()
  imgUrl: string;
}
