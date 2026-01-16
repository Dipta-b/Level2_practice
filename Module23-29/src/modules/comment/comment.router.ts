import express, { Router } from 'express';
import { CommentController } from './comment.controller';
import auth, { UserRole } from '../../middlewares/auth';


const router = express.Router();

router.get("/:commentId", CommentController.getCommentById);

router.get("/:author/:authorId", CommentController.getCommentByAuthor)
router.post("/", auth(UserRole.USER, UserRole.ADMIN), CommentController.createComment);

router.delete("/:commentId", auth(UserRole.ADMIN, UserRole.USER), CommentController.deleteComment);

router.patch("/:commentId", auth(UserRole.ADMIN, UserRole.USER), CommentController.updateComment);

router.patch("/:commentId/moderate", auth(UserRole.ADMIN),
    CommentController.moderateComment)

export const commmentRouter: Router = router;