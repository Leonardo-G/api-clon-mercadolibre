import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/category/model/category.model';

export type SubCategoryDocument = HydratedDocument<SubCategory>;

@Schema({
  timestamps: true,
  strict: true,
})
export class SubCategory extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'Category',
  })
  category: Category;

  @Prop({
    type: String,
    required: true,
  })
  code: string;

  @Prop({
    type: String,
    required: true,
  })
  imgUrl: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
