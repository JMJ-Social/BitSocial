import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchUserProfilePage } from "../api";

const Profile = () => {

    // what will the route be? /users/:userId?
    // /:userId/home?

    const [posts, setUserPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [followers, setFollowers] = useState([]);

    // const userId = useParams();
    const fetchUser = async (userId) => {
        const user = await fetchUserProfilePage()
        await setUserPosts(user.userPosts);
        // await setMessages(user.userMessages)
        // await setFollowers(user.userMessages);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <p>Im someones profile</p>
    )
}
export default Profile