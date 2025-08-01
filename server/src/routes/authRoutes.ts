import  express  from "express";
import { Router } from "express";
import {signIn,signUp}  from "../controller/authController";

const authrouter = Router();
authrouter.post('/signIn',signIn);
authrouter.post('/signUp',signUp);

export default authrouter;