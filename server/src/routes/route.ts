import  Express  from "express";
import { signIn } from "../controller/authcontroller";

const router=Express.Router();
router.post('/signIn',signIn);
router.post('/signUp',signUp);

export default router;