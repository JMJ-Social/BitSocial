const express = require('express')
const postsRouter = express.Router()
const {createPost, getAllPosts} = require('../db/posts')

postsRouter.get('/', async (req, res, next) => {
    try{
        const posts = await getAllPosts()
        console.log(posts)
        res.send(posts)
    }catch(error){
        throw error
    }
})

module.exports = postsRouter;