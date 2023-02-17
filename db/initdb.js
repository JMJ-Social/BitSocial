// import client from /index
const client = require("./index");

//dropTables and createTables
const dropTables = async () => {
    try {
        await client.query(`
        DROP TABLE IF EXISTS followers;
        DROP TABLE IF EXISTS messages;
        DROP TABLE IF EXISTS posts;
        DROP TABLE IF EXISTS users;
        `)
    } catch (error) {
        console.log('error dropping tables')
        throw error;
    }
}

const createTables = async () => {
    try {
        console.log('creating tables...');

        // TIME STAMPS ARE REALLY HARD TO STORE IN SQL
        // SEE: https://www.w3schools.com/sql/sql_dates.asp
        // might not be worth storing 'time' for posts / messages, just a YYY-MM-DD

        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            email_address VARCHAR(255) UNIQUE NOT NULL,
            phone_number INT NOT NULL
        )
        ;

        CREATE TABLE posts (
            post_id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            post_author_id INT REFERENCES users.id,
            post_content TEXT NOT NULL,
            post_timestamp DATE
        )
        ;

        CREATE TABLE messages (
            message_id SERIAL PRIMARY KEY,
            sent_to INT REFERENCES users.id,
            sent_from INT REFERENCES users.id,
            message_timestamp DATE,
            message_content TEXT NOT NULL
        )
        ;

        CREATE TABLE followers (
            followers_id SERIAL PRIMARY KEY,
            followers_lead INT REFERENCES users.id,
            followers_ INT REFERENCES users.id
        )
        `);
        console.log('done creating tables...') 
    } catch (error) {
        console.log('error creating tables')
        throw error;
    }
};

module.export = {
    dropTables,
    createTables,
}