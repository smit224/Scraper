import { Request, Response } from 'express';
import { IUser } from '@src/models';
import { mongo } from '../services/CreateUser';
import User from '@src/models/query';

export async function registration(req: Request, res: Response): Promise<Response> {
  console.log("Request Body: ", req.body);
  try {
    const { name, email, password } = req.body;
    
    const newUser: IUser = new User({
      username: name,
      email,
      password
    });
    const result = await mongo.createUser<IUser>(newUser);
    console.log("Result =",result)
    return res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, errorMessage: 'Internal Server Error' });
  }
}
