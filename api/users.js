const express = require('express')
const jwt = require('jsonwebtoken')
const usersRouter = express.Router()
const { insertUser, verifyUser, getUserByUsername } = require('../db/users')

usersRouter.post('/register', async (req, res, next) => {
    try{
    const { firstName, lastName, username, password, email, phone } = req.body
    const testUsername = await getUserByUsername(username)
    if(testUsername){
        console.log('Username taken')
        return
    }
    const newUser = await insertUser({firstName, lastName, username, password, email, phone})
    res.send(newUser)
    }catch(error){
        console.error('There was an error in posting new user')
        throw error
    }
})
usersRouter.post('/login', async (req, res, next) => {
    try{
        const { username, password } = req.body
        if(await verifyUser(username, password)){
            const user = await getUserByUsername(username)
            const token = jwt.sign(user, process.env.JWT_SECRET, {
                expiresIn: '1w'
            })
            res.send(token)
        }
        else{
            res.status(401).send({
                error: 'NotAuthorized',
                message: "Invalid username or password"
            })
        }
    }catch(error){
        console.error('Error in logging in user in api')
        throw error
    }
})
module.exports = usersRouter;