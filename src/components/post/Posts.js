import {useEffect, useState} from "react";

import Post from "./Post";
import './Style-post.css'
import {getPosts} from "../services/api";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        getPosts().then(post => setPosts(post))
    },[])

    return (
        <div className={'posts'}>
            {posts.map(value => <Post key={value.id} title={value.title} body={value.body}/>)};
        </div>
    );
};

export default Posts;