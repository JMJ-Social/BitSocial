import { fetchAllPosts } from "../api";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
const Posts = () => {
    const [posts, setPosts] = useState([])
    const gettingAllPosts = async () => {
        const allPosts = await fetchAllPosts()
        setPosts(allPosts)
    }
    useEffect(() => {
        gettingAllPosts()
    }, [])
    return (
        <div id='posts-container'>
            {posts.map((post, index) => {
                return <SinglePost key={index} post={post}/>
            })}
        </div>
    )
}
export default Posts;