import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import './PostsPageStyle.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div className={'posts'}>
            <div className={'posts__title'}>
                <h1>Posts</h1>
                {
                   posts.map(post => <Post key={post.id} posts={post}/>)
                }
            </div>
            <div className={'posts__details'}>
                <Outlet/>
            </div>

        </div>
    );
};

export {PostsPage};