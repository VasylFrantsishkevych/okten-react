import React, {useState} from 'react';

import UserDetails from "../UserDetails/UserDetails";
import {userServices} from "../../services/user.service";
import {postsServices} from "../../services/post.service";
import './UsersStyle.css'
import Post from "../post/Post";



const User = (props) => {
    let {item: {id, name}} = props;

    let [user, setUser] = useState(null);

    const getUserId = (id) => {
        userServices.getUser(id)
            .then(value => setUser(value))
        }

    let [post, setPost] = useState([])

    const getPostId = (id) => {
        postsServices.getPost(id)
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
            <div className={'post__container'}>
            {
                post.map(value => <Post key={value.id} userId={value.userId} title={value.title} body={value.body}/>)
            }
            </div>
        </>
    );
};

export default User;