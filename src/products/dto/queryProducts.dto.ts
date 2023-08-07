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

  @IsOptional()
  @IsBoolean()
  offer?: boolean;

  @IsOptional()
  @IsIn([0, 1, 2])
  shipping?: 0 | 1 | 2;

  @IsOptional()
  @IsBoolean()
  interests?: boolean;

  @IsOptional()
  @IsString()
  until?: string;

  @IsOptional()
  @IsString()
  condition?: 'nuevo' | 'reacondicionado' | 'usado';

  @IsOptional()
  @IsNumber()
  price_gte?: number;

  @IsOptional()
  @IsNumber()
  price_lte?: number;

  @IsOptional()
  @IsString()
  tags?: string;

  @IsOptional()
  @IsString()
  sort?: 'price_asc' | 'relevant';

  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsNumber()
  skip?: number;
}
