const client = require('/index');

const insertUser = async (userData) => {
    const {firstName, lastName, username, password, email, phone} = userData;
    const {rows: [user]} = await client.query(`
    INSERT INTO users (first_name, last_name, password, email_address, phone_number)
    VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT (email_address) DO NOTHING
    RETURNING id, first_name, last_name, username, email_address
    ;
    `);
    return user;
}