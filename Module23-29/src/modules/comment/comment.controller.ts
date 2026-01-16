import { Request, Response } from "express";
import { CommentService } from "./comment.service";

const createComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        req.body.authorId = user?.id;
        const result = await CommentService.createComment(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create comment" });
    }
}

const getCommentById = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;
        const result = await CommentService.getCommentById(commentId!);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
}
const getCommentByAuthor = async (req: Request, res: Response) => {
    try {
        const { authorId } = req.params;
        const result = await CommentService.getCommentsByAuthor(authorId!);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
}

const deleteComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { commentId } = req.params;
        const result = await CommentService.deleteComment(commentId as string, user?.id!);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
}
const updateComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { commentId } = req.params;
        const result = await CommentService.updateComment(commentId as string, req.body, user?.id!);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to update comment" });
    }
}
const moderateComment = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;

        const result = await CommentService.moderateComment(commentId as string, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to update comment" });
    }
}




export const CommentController = {
    createComment,
    getCommentById,
    getCommentByAuthor,
    deleteComment,
    updateComment,
    moderateComment
}