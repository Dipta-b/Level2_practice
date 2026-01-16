import express, { Router } from 'express';
import { PostController } from './post.controller';
import auth, { UserRole } from '../../middlewares/auth';


const router = express.Router();



router.get("/", PostController.getAllPosts)

router.post('/', auth(UserRole.USER), PostController.createPosts);

router.get("/:id", PostController.getPostById);

router.get("/my-posts", auth(UserRole.USER, UserRole.ADMIN), PostController.getMyPost);

router.get("/stats", auth(UserRole.ADMIN), PostController.getStats);

router.patch("/:postId", auth(UserRole.ADMIN, UserRole.USER), PostController.updatePost);

router.delete("/:postId", auth(UserRole.ADMIN, UserRole.USER), PostController.deletePost);








export const PostRouter: Router = router;