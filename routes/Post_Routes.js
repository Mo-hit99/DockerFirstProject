import express from 'express'
import { createPost, deleteMany, deletePost, getAllPost, GetOnePost, updatePost } from '../controller/Post_Controller.js';

const Post_routes = express.Router();

// post,get,deleteMany
Post_routes.route('/').get(getAllPost).post(createPost).delete(deleteMany);

//  by id getone updatepost,deletepost
Post_routes.route('/:id').get(GetOnePost).put(updatePost).delete(deletePost);


export default Post_routes;