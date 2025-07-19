import express from 'express';
import { createPost, deletePost, updatePost } from '../controller/postController';

const router=express.Router();

router.post("/",createPost);
router.put("/updatePost",updatePost)
router.delete("/deletePost",deletePost)


export default router;