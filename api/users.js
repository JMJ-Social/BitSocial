const express = require('express')
const usersRouter = express.Router()
const { insertUser } = require('../db/users')

usersRouter.post('/', async (req, res, next) => {
    try{
    const { firstName, lastName, username, password, email, phone } = req.body
    const newUser = await insertUser({firstName, lastName, username, password, email, phone})
    res.send(newUser)
    }catch(error){
        console.error('There was an error in posting new user')
        throw error
    }
})
module.exports = usersRouter;