const client = require('/index');
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
        SELECT user.username, user.password, user.email_address, user.phone_number, user.first_name, user.last_name
        WHERE id = $1
        ;
        `, [userId]);

        return user;
    } catch (error) {
        console.log('error in getUserById in the database');
        throw error;
    }
};

module.exports = {
    insertUser,
    getUserById,
    
}