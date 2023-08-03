import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from 'src/category/service/category.service';

@Injectable()
export class IsExistCategoryMiddleware implements NestMiddleware {
  constructor(private categoryService: CategoryService) {}
  async use(req: any, res: any, next: () => void) {
    const code = req.body.code;
    const category = await this.categoryService.findOneCategory(code);

    if (!category)
      throw new BadRequestException(`category ${code} is does not exist`);

    req.categoryId = category._id;
    next();
  }
}
