import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

class CharacteristicInfo {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

class CharacteristicDetail {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacteristicInfo)
  info: CharacteristicInfo[];
}

class Shipping {
  @IsOptional()
  @IsNumber()
  @IsIn([0, 1, 2])
  code: number;

  @IsString()
  @IsOptional()
  @IsNumber()
  detail: string;
}

class PriceDetail {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ValidateIf((o) => o.offer === true)
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  offerPrice: number;
}

class Interests {
  @IsOptional()
  @IsBoolean()
  accept: boolean;

  @IsOptional()
  @ValidateIf((o) => o.accept === true)
  @IsIn([0, 3, 6, 12])
  until: number;
}

export class CreateProductsDTO {
  @IsString()
  @MinLength(10)
  title: string;

  @IsArray()
  category: string[];

  @IsArray()
  subCategory: string[];

  @IsArray()
  imgProduct: string[];

  @IsArray()
  @IsNotEmpty()
  characteristics: string[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CharacteristicDetail)
  characteristicsDetail: CharacteristicDetail[];

  @IsBoolean()
  @IsOptional()
  recommended: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  sold: number;

  @IsBoolean()
  @IsOptional()
  offer: boolean;

  priceDetail: PriceDetail;

  shipping: Shipping;

  interests: Interests;

  @IsOptional()
  @IsString()
  @IsIn(['nuevo', 'usado', 'reacondicionado'])
  condition: ['nuevo', 'usado', 'reacondicionado'];

  @IsArray()
  @IsNotEmpty()
  tags: string[];
}
