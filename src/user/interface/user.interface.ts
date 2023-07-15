import { Types } from 'mongoose';

export interface IUserReturn {
  _id: Types.ObjectId;
  username: string;
  email: string;
  typeUser: string;
  imgUrl: string;
}
