import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './PostUserId.css'
import {userService} from "../../services/user.servise";
import PostUserId from "../../components/PostUserId/PostUserId";

const PostUserIdPage = () => {
    const {id} = useParams()
    const [userId, setUserId] = useState([]);

    useEffect(() => {
        userService.getUserId(id).then(value => setUserId([...value]))
    },[])

    return (
        <div className={'posts__container'}>
            {
                userId.map(post => <PostUserId key={post.id} item={post}/>)
            }
        </div>
    );
};

export {PostUserIdPage};