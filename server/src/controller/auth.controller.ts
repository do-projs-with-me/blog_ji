import express from 'express'
import { Request, Response } from 'express';  //we hahve to use this in typescript
import { PrismaClient } from '@prisma/client';
import { User } from '../generated/prisma';

const prisma = new PrismaClient();



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

        res.status(201).json({ msg: "user created" });
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

         res.status(200).json({ msg: "Login successful", user });
         return; 
    } catch (error) {

        res.status(500).json({ msg: "something wnet wrong", error })
    }

}