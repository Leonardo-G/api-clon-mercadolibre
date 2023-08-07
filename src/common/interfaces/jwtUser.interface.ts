import { Types } from 'mongoose';

export interface IJwtUser {
  _id: Types.ObjectId;
  email: string;
}
