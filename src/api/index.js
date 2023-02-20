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