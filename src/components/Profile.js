import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchUserProfilePage } from "../api";

const Profile = () => {

    // what will the route be? /users/:userId?
    // /:userId/home?
    
    // const userId = useParams();

    const [posts, setUserPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [followers, setFollowers] = useState([]);

    const fetchUser = async (userId) => {
        const user = await fetchUserProfilePage(userId)
        setUserPosts(user.userPosts);
        setMessages(user.userMessages)
        setFollowers(user.userFollowers);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <p>Im someones profile</p>
    )
}
export default Profile