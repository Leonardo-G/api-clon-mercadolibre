import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './model/category.model';
import { IsExistCategoryMiddleware } from 'src/common/middlewawre/is-exist-category.middleware';
import {
  SubCategory,
  SubCategorySchema,
} from 'src/sub-category/model/SubCategory.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
      },
      { name: SubCategory.name, schema: SubCategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IsExistCategoryMiddleware).forRoutes({
      path: 'categories/:categoryId/subcategories',
      method: RequestMethod.GET,
    });
  }
}
