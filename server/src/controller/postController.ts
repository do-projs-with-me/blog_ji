import express from 'express'
import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import prisma from '../utils/prisma'

export const createPost = async (req: Request, res: Response) => {
    const { title, content, authorId } = req.body;

    try {
        if (!title || !content || !authorId) {
            res.status(500).json({ msg: "enter valid things" })
            return;
        }

        const post = await prisma.post.create({
            data: {
                title, content, authorId
            }
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ msg: "error in creating post" });
    }

}

export const updatePost = async (req: Request, res: Response) => {

    //jiska post hai wahi edit kr sakta hai 
    // 2. frontend se 2 chije chaiye userid and postid 
    // 3. post is se post ko find krege 
    //4. post ki suthor id aur user id ko match krege(equal )
    //5. post edit kr dege
    // what do user send only content or only heading in update

    try {
        const { id } = req.params;
        const { userId, content, title } = req.body;// apan yha se user id req kr rhe aur ye mach krti hai to hi...

        const existPost = await prisma.post.findUnique({
            where: { id: id },
        })

        if (existPost?.authorId != userId) {
            res.status(400).json({ msg: "sorry you cannot edit" })
            return;
        }

        if (!existPost) {
            res.status(404).json({ msg: 'Post not found' })
            return;
        }

        const updatPost = await prisma.post.update({
            where: { id: id },
            data: {
                title: title ?? existPost.title,
                content: content ?? existPost.content
            }
        });

        res.status(200).json({ msg: "post updated" })
    } catch (error) {
        res.status(500).json({ msg: "unable to update the post" });
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.body;

    const existPost = await prisma.post.findUnique({
        where: { id: id }
    })

    if (!existPost) {
        res.status(400).json({ msg: "post not found" })
        return;
    }

    if (existPost?.authorId != userId) {
        res.status(400).json({ msg: "not access to delete" })
        return;
    }

    await prisma.post.delete({
        where: { id: id }
    });

    res.status(200).json({ msg: "post deleted succefully" })

}

export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const posts = await prisma.post.findUnique({
            where: { id: id },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                    }

                }
            }
        })
        if (!posts) {
            res.status(400).json({ msg: "no post fonund" });
            return
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getAllPost = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,

                    }
                }
            }
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json(error);
    }
}