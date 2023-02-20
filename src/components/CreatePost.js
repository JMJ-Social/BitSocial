import { useState } from "react";
import { addPost } from "../api";

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [post_content, setPostContent] = useState('')
    const handleCreatePost = async (e) => {
        e.preventDefault()
        const newPost = await addPost({title, post_author_id: 1, post_content})
        console.log('newPost', newPost)
    }
    return (
        <form id='post-form' onSubmit={handleCreatePost}>
            <p>Name</p>
            <input type='text' value={title} placeholder='Title' required onChange={(e) => setTitle(e.target.value)}></input>
            <input type='text' value={post_content} placeholder='content' required onChange={e => setPostContent(e.target.value)}></input>
            <button type="submit">Post</button>
        </form>
    )
}
export default CreatePost;