import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SubCategoryController } from './controller/sub-category.controller';
import { SubCategory, SubCategorySchema } from './model/SubCategory.model';
import { SubCategoryService } from './services/sub-category.service';
import { IsExistCategoryMiddleware } from '../category/middlewawre/is-exist-category.middleware';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    CategoryModule,
    MongooseModule.forFeature([
      { name: SubCategory.name, schema: SubCategorySchema },
    ]),
  ],
  controllers: [SubCategoryController],
  providers: [SubCategoryService],
})
export class SubCategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsExistCategoryMiddleware)
      .forRoutes({ path: 'sub-category', method: RequestMethod.POST });
  }
}
