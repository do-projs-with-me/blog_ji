import express from 'express';
import { createPost, deletePost, getAllPost, getPostById, updatePost } from '../controller/postController';

const postrouter=express.Router();

postrouter.post("/createPost",createPost);
postrouter.put("/updatePost",updatePost)
postrouter.delete("/deletePost",deletePost)
postrouter.get("/allPosts",getAllPost)
postrouter.get("/getPostbyId",getPostById)


export default postrouter;