require('dotenv').config()
const express = require('express')
const server = express()
const client = require('./db/index')
const cors = require('cors')
const morgan = require('morgan')
const apiRouter = require('./api/index')

client.connect();
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use('/api', apiRouter)

const { PORT = 3001 } = process.env
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
module.exports = server;