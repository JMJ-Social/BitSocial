import { useState } from "react";
import { addPost } from "../api";

CreatePost = () => {
    const [title, setTitle] = useState('')
    const [post_content, setPostContent] = useState('')
    return (
        <form>
            <input type='text' value={title} placeholder='Title' required onChange={(e) => setTitle(e.target.value)}></input>
            <input type='text' value={post_content} placeholder='content' required onChange={e => setPostContent(e.target.value)}></input>
        </form>
    )
}