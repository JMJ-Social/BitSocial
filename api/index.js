const express = require('express')
const router = express.Router()
const postsRouter = require('./posts')
const usersRouter = require('./users')

router.use('/users', usersRouter)
router.use('/posts', postsRouter)
module.exports = router;