const {REACT_APP_BASE_URL = 'http://localhost:3001/api'} = process.env

export async function fetchAllPosts(){
    try{
        const response = await fetch(`${REACT_APP_BASE_URL}/posts`)
        const result = response.json()
        return result;
    }catch(error){
        console.error('error fetching posts')
        throw error
    }
}
export async function addPost(postToBeCreated){
    try{
        const { title, post_author_id, post_content }  = postToBeCreated
        const response = await fetch(`${REACT_APP_BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                post_author_id,
                post_content
        })
    })
    const result = await response.json()
    return result
    }catch(error){
        console.error('Error in sending post request to create a post')
        throw error
    }
}

export const fetchUserPosts = async (userId) => {
    try {
        const response = await fetch(`${REACT_APP_BASE_URL}/api/:userId/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const userPosts = await response.json();
        return userPosts;
    } catch (error) {
        throw error;
    }
};

export const fetchUserMessages = async(userId) => {
    try {
        const response = await fetch(`${REACT_APP_BASE_URL}/api/:${userId}/messages`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const messages = await response.json();
        return messages;
    } catch (error) {
        throw error;
    }
};

export const fetchUserFollowers = async (userId) => {
    try {
        const result = await fetch(`${REACT_APP_BASE_URL}/api/:${userId}/followers`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const followers = await result.json();
        return followers;
    } catch (error) {
        throw error;
    }
}

export const fetchUserProfilePage = async (userId) => {
    try {
        const userPosts = await fetchUserPosts(userId);
        // const userMessages = await fetchUserMessages(userId);
        // const userFollowers = await fetchUserFollowers(userId);
        return userPosts;
    } catch (error) {
        throw error;
    }
}