// const mongoose = require("mongoose");

import mongoose, { Document, Schema } from 'mongoose';

export interface IQuery {
    keyword: string,
    products: IProduct[]
}

export interface INQuery {
    input: {
        keyword: string
    },
    products: IProduct[]
}

export interface IProduct {
    title: string,
    url: string,
    price: number,
    image: string,
    competitor: string
}

export interface IUser {
    username: string;
    email: string;
    password: string;
  }
  
  interface IUserModel extends IUser, Document {}
  
  const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  
  const User = mongoose.model<IUserModel>('User', UserSchema);
  export default User;