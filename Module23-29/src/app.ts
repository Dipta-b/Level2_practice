import express, { Application } from 'express'
import { PostRouter } from './modules/post/post.router';
import { auth } from './lib/auth';
import { toNodeHandler } from "better-auth/node";
import cors from 'cors';
import { commmentRouter } from './modules/comment/comment.router';
import errorHandler from './middlewares/globalHandler';
const app: Application = express()
app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))
app.use(express.json());



app.all("/api/auth/*splat", toNodeHandler(auth));

app.use('/posts', PostRouter);
app.use('/comments', commmentRouter);



app.get('/', (req, res) => {
    res.send('Hello World')
})


app.use(errorHandler)

export default app;