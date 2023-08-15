import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, HydratedDocument } from 'mongoose';

import { User } from 'src/user/model/user.model';

export type ProductDocument = HydratedDocument<Products>;

@Schema({
  strict: true,
  timestamps: true,
})
export class Products extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  idUser: User;

  @Prop({
    type: String,
    required: true,
    index: {
      text: true,
      weights: {
        title: 10,
      },
    },
  })
  title: string;

  @Prop({
    type: [String],
    default: [
      'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
    ],
  })
  imgProduct: string[];

  @Prop({
    type: [String],
    required: true,
  })
  category: string[];

  @Prop({
    type: [String],
    required: true,
  })
  subCategory: string[];

  @Prop({
    type: Array,
    default: [],
  })
  characteristics: [];

  @Prop({
    type: [
      {
        code: { type: String, required: true },
        info: [
          {
            title: { type: String, required: true },
            description: { type: String, required: true },
          },
        ],
      },
    ],
    required: true,
  })
  characteristicsDetail: {
    code: string;
    info: {
      title: string;
      description: string;
    }[];
  }[];

  @Prop({
    type: Boolean,
    default: false,
  })
  recommended: boolean;

  @Prop({
    type: Number,
    default: 0,
  })
  visited: number;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: Number,
    required: true,
  })
  stock: number;

  @Prop({
    type: Number,
    required: true,
  })
  sold: number;

  @Prop({
    type: Boolean,
    default: false,
  })
  offer: boolean;

  @Prop({
    type: {
      price: {
        type: Number,
        required: true,
      },
      offerPrice: {
        type: Number,
        default: 0,
      },
    },
  })
  priceDetail: {
    price: number;
    offerPrice: number;
  };

  @Prop({
    type: {
      code: {
        type: Number,
        enum: [0, 1, 2],
        default: 0,
      },
      detail: {
        type: String,
        default: '',
      },
    },
  })
  shipping: {
    code: number;
    detail: string;
  };

  @Prop({
    type: {
      accept: {
        type: Boolean,
        default: false,
      },
      until: {
        type: Number,
        default: 0,
        enum: [0, 3, 6, 12],
      },
    },
  })
  interests: {
    accept: boolean;
    until: 0 | 3 | 6 | 12;
  };

  @Prop({
    type: String,
    enum: ['nuevo', 'usado', 'reacondicionado'],
    default: 'nuevo',
  })
  condition: 'nuevo' | 'usado' | 'reacondicionado';

  @Prop({
    type: Array,
    required: true,
  })
  tags: string[];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
