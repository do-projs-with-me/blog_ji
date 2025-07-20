import express from 'express';
import { createPost, deletePost, getAllPost, getPostById, updatePost } from '../controller/postController';

const router=express.Router();

router.post("/",createPost);
router.put("/updatePost",updatePost)
router.delete("/deletePost",deletePost)
router.get("/allPosts",getAllPost)
router.get("/getPostbyId",getPostById)


export default router;