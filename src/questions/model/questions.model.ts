import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Products } from 'src/products/model/products.model';

@Schema({
  strict: true,
  timestamps: true,
})
export class Questions extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  idProduct: Products;

  @Prop({
    type: String,
    required: true,
  })
  question: string;

  @Prop({
    type: String,
    default: null,
  })
  response: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  answered: boolean;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
