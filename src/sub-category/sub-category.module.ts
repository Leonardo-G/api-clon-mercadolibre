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
import { IsExistCategoryMiddleware } from '../common/middlewawre/is-exist-category.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SubCategory.name,
        schema: SubCategorySchema,
      },
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
