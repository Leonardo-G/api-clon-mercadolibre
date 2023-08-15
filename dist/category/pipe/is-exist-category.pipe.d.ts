import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
export declare class IsExistCategoryPipe implements PipeTransform {
    private categoryService;
    constructor(categoryService: CategoryService);
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
}
