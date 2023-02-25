const express = require('express')
const postsRouter = express.Router()
const {createPost, getAllPosts} = require('../db/posts')

postsRouter.get('/', async (req, res, next) => {
    try{
        const posts = await getAllPosts()
        res.send(posts)
    }catch(error){
        throw error
    }
})
postsRouter.post('/', async (req, res, next) => {
    try{
        const { title, post_author_id, post_content }  = req.body
        const post_timestamp = new Date()
        const newPost = await createPost({title, post_author_id, post_content, post_timestamp})
        res.send(newPost)
    }catch(error){
        throw error;
    }
})
// fetch posts for just one user
postsRouter.get(`/${userId}`, async (req, res, next) => {
    try {
        const { userId } = req.params;
        const posts = await fetchPostsOneUser(userId);
        res.send(posts);
    } catch (error) {
        throw error;
    }
})

module.exports = postsRouter;