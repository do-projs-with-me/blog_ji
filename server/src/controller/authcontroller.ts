import express from 'express'
import { Request,Response } from 'express';  //we hahve to use this in typescript
import { PrismaClient } from '@prisma/client';
import { User } from '../generated/prisma';

const prisma=new PrismaClient();



export const signIn=async(req:Request,res:Response)=>{
    const {username,email,password}=req.body;
    try{
    if(!username || !email || !password){
        return res.status(400).json({msg:"please enter all valid details"});
    }

    const userExits=await prisma.user.findUnique({
        where: {email}
    });

    if(userExits){
        return res.status(400).json({msg:"user already exists"});
    }

    const newUser=await prisma.user.create({
        data:{username,email,password},
    });

    res.status(201).json({msg:"user created"});
}
catch(err){
res.status(500).json({msg:"something wnet wrong",err})
}


}

export const signUp=async(req:Request,res:Response)=>{
    const {email,password}=req.body;
}