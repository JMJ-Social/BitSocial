const client = require('./index')

const createPost = async (postInfo) => {
    const {title, post_author_id, post_content, post_timestamp} = postInfo
try{
    const {rows: [post]} = await client.query(`
        INSERT INTO posts(title, post_author_id, post_content, post_timestamp)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        ;
    `, [title, post_author_id, post_content, post_timestamp])
    return post
}catch(error){
    console.error('Error creating post')
    throw error
}
}
const getAllPosts = async () => {
    try{
        const {rows: posts} = await client.query(`
            SELECT posts.title, posts.post_content, posts.post_timestamp, users.username AS post_author
            FROM posts
            JOIN users
            ON posts.post_author_id = users.id
            ;
        `)
        return posts
    }catch(error){
        console.error('Error getting all posts')
        throw error
    }
}
const fetchPostsOneUser = async (userId) => {
    try {
        const {rows: userPosts} = await client.query(`
        SELECT * FROM posts
        WHERE post_author_id = $1
        ;
        `, [userId]);
        return userPosts;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    createPost,
    getAllPosts,
    fetchPostsOneUser,
}