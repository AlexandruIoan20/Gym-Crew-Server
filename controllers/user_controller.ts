import User from '../models/user';
import { request as Request, response as Response } from 'express';
import bcrypt from 'bcrypt'; 

export const register_user = async (req: Request, res: Response): Promise<typeof User | { message: string }> => { 
    try { 
        const { name, email, password } = await req.json(); 


        if(!name || !email || !password) res.status(400).json({ message: "Bad Request" }); 

        const cryptedPassword = await bcrypt.hash(password, 10); 
        const newUser = new User( 
            { 
                name, 
                email,
                password: cryptedPassword, 
            }
        )
    } catch(err) { 
        console.log(err); 
        res.status(500).json({ message: "Internal server error "}); 
    }
}