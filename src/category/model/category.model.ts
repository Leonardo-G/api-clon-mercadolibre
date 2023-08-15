import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category extends Document {
  @Prop({
    type: String,
    required: true,
  })
  code: string;

  @Prop({
    type: String,
    required: true,
  })
  title: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
