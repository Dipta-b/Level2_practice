import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import { PostService } from './post.service';
import { Post, PostStatus } from '../../../generated/prisma/client';
import paginationSortingHelper from '../../helpers/paginationSortingHelper';
import { UserRole } from '../../middlewares/auth';



const createPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        if (!user) {
            return res.status(500).json({ error: "Unauthorized" });
        }
        const result = await PostService.createpost(req.body as Omit<Post, "id" | "createdAt" | "updatedAt">, user.id!);
        res.status(201).json(result);
    } catch (error: any) {
        next(error)
    }
}


const getAllPosts = async (req: Request, res: Response) => {
    try {

        const { search } = req.query;
        const searchString = typeof search === 'string' ? search : undefined;

        const tags = req.query.tags ? (req.query.tags as string).split(",") : [];

        const isFeatured = typeof req.query.isFeatured === "string" ? req.query.isFeatured === "true" ? true : req.query.isFeatured === "false" ? false : undefined : undefined;

        const status = req.query.status as PostStatus | undefined;



        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(req.query)

        const result = await PostService.getAllPosts({ search: searchString, tags, isFeatured, status, page, limit, skip, sortBy, sortOrder });
        res.status(200).json(result)



    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });

    }
}

const getPostById = async (req: Request, res: Response) => {
    try {
        const { id: postId } = req.params;


        if (!postId) {
            throw new Error("Post is is required")
        }


        const result = await PostService.getpostById(postId);
        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });

    }
}
const getMyPost = async (req: Request, res: Response) => {
    try {

        const user = req.user;
        if (!user) {
            throw new Error("You are not authorized");
        }
        const result = await PostService.getMyPost(user?.id!);
        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({ error: "Failed to fetched post" });

    }
}


const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const user = req.user;
        if (!user) {
            throw new Error("You are not authorized");
        }
        const { postId } = req.params;
        const isAdmin = user.role === UserRole.ADMIN
        const result = await PostService.updatePost(postId as string, req.body, user?.id!, isAdmin);
        res.status(200).json(result)


    } catch (error) {
        next(error)

    }
}
const deletePost = async (req: Request, res: Response) => {
    try {

        const user = req.user;
        if (!user) {
            throw new Error("You are not authorized");
        }
        const { postId } = req.params;
        const isAdmin = user.role === UserRole.ADMIN
        const result = await PostService.deletePost(postId as string, user?.id!, isAdmin);
        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({ error: "Failed to delete post" });

    }
}
const getStats = async (req: Request, res: Response) => {
    try {


        const result = await PostService.getStats();
        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({ error: "Failed to stats" });

    }
}

export const PostController = {
    createPosts,
    getAllPosts,
    getPostById,
    getMyPost,
    updatePost,
    deletePost,
    getStats
};