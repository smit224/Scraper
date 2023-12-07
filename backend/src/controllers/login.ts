import { Request, Response } from 'express';
import { IUser } from '@src/models';
import { mongo } from '../services/CreateUser';


export async function login(req: Request, res: Response): Promise<Response> {
  console.log("Request Body: ", req.body);
  try {
    const {email, password} = req.body;
    const data = await mongo.findUser<IUser>({ email });
    console.log("Data =",data)
    if(data?.password === password){
        return res.status(201).json({ success: true, message: 'Successful' });
    }
    return res.status(400).json({ error: "Email address not found" }); 
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, errorMessage: 'Internal Server Error' });
  }
}
