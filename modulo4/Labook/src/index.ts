import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {AddressInfo} from 'net'
import { PostController } from './controller/PostController';
import { UserController } from './controller/UserController';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const postController = new PostController()
const userController = new UserController()


app.post("/user", userController.signUp)
app.post("/user/login", userController.login)

app.post("/posts/create", postController.createPost)
app.post("/posts/like/:postId", postController.likePost)
app.delete("/posts/like/:postId", postController.unlikePost)
app.get("/posts/:id", postController.getPostById)















const server = app.listen(3003,()=>{
    if (server) {
        const address = server.address() as AddressInfo;
        console.log("Servidor rodando na porta 3003");
        
    } else {
        console.log("Server is not available");
        
    }
})
