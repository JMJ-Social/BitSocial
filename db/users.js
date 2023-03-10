const client = require('./index');
const bcrypt = require('bcrypt');

// userData is an object
const insertUser = async (userData) => {
    try {
        const {firstName, lastName, username, password, email, phone} = userData;

        const cryptedPass = await bcrypt.hash(password, 10);

        const {rows: [user]} = await client.query(`
        INSERT INTO users (first_name, last_name, username, password, email_address, phone_number)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (email_address) DO NOTHING
        RETURNING id, first_name, last_name, username, email_address
        ;
        `, [firstName, lastName, username, cryptedPass, email, phone]);
        return user;
    } catch (error) {
        console.log('error inserting new user into the database');
        throw error;
    }
};
const getUserById = async (userId) => {
    try {
        const {rows: [user]} = await client.query(`
        SELECT username, password, email_address, phone_number, first_name, last_name
        FROM users
        WHERE id = $1
        ;
        `, [userId]);

        return user;
    } catch (error) {
        console.error('error in getUserById in the database');
        throw error;
    }
};
const getUserByUsername = async (username) => {
    try {
        const {rows: [user]} = await client.query(`
        SELECT username, password, email_address, phone_number, first_name, last_name
        FROM users
        WHERE username = $1
        ;
        `, [username]);
        return user;
    } catch (error) {
        console.error('error in getUserByUsername in the database');
        throw error;
    }
};
const verifyUser = async (username, password) => {
    try{
        const {rows: [user]} = await client.query(`
            SELECT password
            FROM users
            WHERE username = $1
            ;
        `, [username])
        return await bcrypt.compare(password, user.password);
    }catch(error){
        console.error('Error in Login user in the DB')
        throw error
    }
}

module.exports = {
    insertUser,
    getUserById,
    getUserByUsername,
    verifyUser
}