import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({
    required: true,
    type: String,
  })
  username: string;

  @Prop({
    type: String,
    default: null,
  })
  lastname: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    enum: ['user', 'official-store'],
    default: 'user',
  })
  typeUser: string;

  @Prop({
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  })
  imgUrl: string;

  @Prop({
    type: Number,
    default: Date.now(),
  })
  created: number;

  @Prop({
    type: Array,
    default: [],
  })
  categories: string[];

  // Cuando el usuario sea una tienda, colocar tags que representan la tienda.
  @Prop({
    type: Array,
    default: [],
  })
  tags: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
