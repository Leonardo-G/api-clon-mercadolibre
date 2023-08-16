import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ProductsModule } from './products/products.module';
import { OpinionModule } from './opinion/opinion.module';
import { QuestionsModule } from './questions/questions.module';
import { DatabaseModule } from './database/database.module';
import environmentConfig from './config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environmentConfig],
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '1d' },
    }),
    DatabaseModule,
    UserModule,
    CategoryModule,
    SubCategoryModule,
    ProductsModule,
    OpinionModule,
    QuestionsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
