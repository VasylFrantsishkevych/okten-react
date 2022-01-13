import React, {useState} from 'react';

import UserDetails from "./UserDetails";
import {userServices} from "../../services/user.service";
import {postsServices} from "../../services/post.service";
import Posts from "../post/Posts";

const User = (props) => {
    let {item: {id, name}} = props;

    let [user, setUser] = useState(null);

    const getUserId = (id) => {
        userServices.getUser(id)
            .then(value => setUser(value))
        }

    let [post, setPost] = useState(null)

    const getPostId = (userId) => {
        postsServices.getPosts(userId)
            .then(value =>{
                    setPost(value)
                })
    }

    return (
        <>
            <div className={'user__card'}>
                <div className={'user__name'}>
                    <h2>{id} - {name}</h2>
                    <button onClick={() => getUserId(id)}>GetDetails</button>
                </div>
                {user && <UserDetails item={user} getPostId={getPostId}/>}
            </div>
            {post && <Posts/>}
        </>
    );
};

export default User;