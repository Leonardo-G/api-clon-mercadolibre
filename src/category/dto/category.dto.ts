import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class NewCategoryDTO {
  @IsNotEmpty({
    message: 'Se requiere el campo code',
  })
  @MinLength(2)
  @IsString()
  code: string;

  @IsNotEmpty({
    message: 'Se requiere el campo title',
  })
  @MinLength(2)
  @IsString()
  title: string;
}
