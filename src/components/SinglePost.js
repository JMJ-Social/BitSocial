const SinglePost = ({post, index}) => {
    return (
        <div key={index} className="single-post" >
            <p className="post-title">{post.title}</p>
            <p className="post-content">{post.post_content}</p>
            <span className="bottom-post"><span>{post.post_author}</span><span>{post.post_timestamp}</span></span>
            
        </div>
    )
}
export default SinglePost;