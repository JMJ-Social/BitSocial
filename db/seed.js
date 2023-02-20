// import client from /index
const client = require('./index');
const {dropTables, createTables } = require('./initdb')
const {insertUser} = require('./users')
const { createPost } = require('./posts')
// seed data for db initialization
const fakeUsers = [
    {   firstName: "John",
        lastName: "Jingleheimer",
        username: "jingleHeimer",
        password: "J0hnJ1ngle",
        email: "johnJ@gmail.com",
        phone: 9709709700,
    },
    {
        firstName: "Sandra",
        lastName: "Herowitz",
        username: "sandyS",
        password: "P4ssw0rd!",
        email: "sandra@hotmail.net",
        phone: 8795439870,
    },
    {
        firstName: "James",
        lastName: "Ortega",
        username: "OrtegaIce",
        password: "0rtegaM4n.",
        email: "J.Ortega@usenet.org",
        phone: 4651239856,
    },
    {
        firstName: "Ian",
        lastName: "Hamilton",
        username: "HamMan",
        password: "ians.passw0rd",
        email: "ianHere@netscape.gov",
        phone: 5824687946,
    },
    {
        firstName: "Allison",
        lastName: "bitSocial",
        username: "4llison",
        password: "4llisonBitS0cial.",
        email: "this4llison",
        phone: 3219875698,
    },
]
const fakePosts = [
    {
        title: 'I am a post',
        post_author_id: 1,
        post_content: "i'm such a cool post",
        post_timestamp: new Date()

    },
    {
        title: 'Looking for entry level Software Engineer',
        post_author_id: 2,
        post_content: "Really want someone who recently graduated from a boot camp",
        post_timestamp: new Date()

    },
    {
        title: 'Jaron is a liar',
        post_author_id: 3,
        post_content: "He told me he was 6ft but I found out he's totally not",
        post_timestamp: new Date()

    },
    {
        title: 'That post that said it was cool',
        post_author_id: 1,
        post_content: "That post is so not cool",
        post_timestamp: new Date()

    }
]
const addUsers = async () => {
   await Promise.all(fakeUsers.map(async (user) => {
        await insertUser(user)
    }))
}
const addPosts = async () => {
    await Promise.all(fakePosts.map(async (post) => {
        await createPost(post)
    }))
}
const rebuildDB = async () => {
    await dropTables();
    await createTables();
    await addUsers();
    await addPosts();
}
client.connect();
rebuildDB().catch(console.error).finally(() => client.end())