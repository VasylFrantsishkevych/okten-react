import React, {useEffect, useState} from 'react';

import './PostsStyle.css'
import {postsServices} from "../../services/post.service";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsServices.getPosts()
            .then(value =>
                    setPosts(value))
    }, [])
    return (
        <div className={'post__container'}>
            {
                posts.map(value => <Post key={value.id} userId={value.userId} title={value.title} body={value.body}/>)
            }
        </div>
    );
};

export default Posts;