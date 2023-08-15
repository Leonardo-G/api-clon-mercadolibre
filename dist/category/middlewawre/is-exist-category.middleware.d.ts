import { NestMiddleware } from '@nestjs/common';
import { CategoryService } from 'src/category/service/category.service';
export declare class IsExistCategoryMiddleware implements NestMiddleware {
    private categoryService;
    constructor(categoryService: CategoryService);
    use(req: any, res: any, next: () => void): Promise<void>;
}
