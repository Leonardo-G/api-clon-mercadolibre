import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SearchQuerys {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  subcategory?: string;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsOptional()
  @IsBoolean()
  offer?: boolean;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsIn([0, 1, 2])
  shipping?: 0 | 1 | 2;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsOptional()
  @IsBoolean()
  interests?: boolean;

  @IsOptional()
  @IsString()
  until?: string;

  @IsOptional()
  @IsString()
  @IsIn(['nuevo', 'reacondicionado', 'usado'])
  condition?: 'nuevo' | 'reacondicionado' | 'usado';

  @Transform(({ value }) => parseFloat(value))
  @IsOptional()
  @IsNumber()
  price_gte?: number;

  @Transform(({ value }) => parseFloat(value))
  @IsOptional()
  @IsNumber()
  price_lte?: number;

  @IsOptional()
  @IsString()
  tags?: string;

  @IsOptional()
  @IsString()
  sort?: 'price_asc' | 'relevant';

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  limit?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  skip?: number;
}
