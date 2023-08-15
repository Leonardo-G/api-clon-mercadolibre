import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Products } from 'src/products/model/products.model';
import { User } from 'src/user/model/user.model';

@Schema({
  strict: true,
  timestamps: true,
})
export class Opinion extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: 'Products',
  })
  idProduct: Products;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  idUser: User;

  @Prop({
    type: String,
    required: true,
  })
  comment: string;

  @Prop({
    type: Number,
    default: 0,
  })
  like: number;

  @Prop({
    type: Number,
    default: 0,
  })
  down: number;

  @Prop({
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  })
  rate: number;
}

export const OpinionSchema = SchemaFactory.createForClass(Opinion);
