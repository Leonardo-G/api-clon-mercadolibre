import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Opinion, OpinionSchema } from './model/opinion.model';
import { OpinionController } from './controller/opinion.controller';
import { OpinionService } from './service/opinion.service';
import { User, UserSchema } from 'src/user/model/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Opinion.name,
        schema: OpinionSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [OpinionController],
  providers: [OpinionService],
})
export class OpinionModule {}
