import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOpinionDTO {
  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsNumber()
  @IsIn([1, 2, 3, 4, 5])
  rate: number;
}

export class UpdateOpinionDTO extends PartialType(CreateOpinionDTO) {}
