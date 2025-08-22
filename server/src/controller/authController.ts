import express from 'express'
import { Request, Response } from 'express';  //we hahve to use this in typescript
import { PrismaClient } from '@prisma/client';
import prisma from "../utils/prisma"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config()

export const signUp = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            res.status(400).json({ msg: "please enter all valid details" });
            return; 
        }

        const userExits = await prisma.user.findUnique({
            where: { email }
        });


        if (userExits) {
            res.status(400).json({ msg: "user already exists" });
            return ; 
        }


        const newUser = await prisma.user.create({
            data: { username, email, password },
        });
        //created token so that we can verify
        const token=jwt.sign({id:newUser.id,email:newUser.email},
            process.env.JWT_SECRET as string,
            {expiresIn:"1d"}
        );

        res.status(201).json({ msg: "user created" ,token});
    }
    catch (err) {
        res.status(500).json({ msg: "something wnet wrong", err })
    }


};

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            res.status(400).json({ msg: "please enter the valid details" })
            return ; 
        }
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.password !== password) {
            res.status(401).json({ msg: "Invalid credentials" });
            return ; 
        }
        const token=jwt.sign({id:user.id,email:user.email},
            process.env.JWT_SECRET as string,
            {expiresIn:"1d"}
        );

         res.status(200).json({ msg: "Login successful",token, user:{
            id:user.id,
            email:user.email,
            username:user.username,
         } });
         return; 
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong", error: (error as Error).message });
}


}