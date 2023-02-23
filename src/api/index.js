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