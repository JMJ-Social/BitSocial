const express = require('express')
const server = express()
const client = require('./db/index')

client.connect();


const { PORT = 3001 } = process.env
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
module.exports = server;