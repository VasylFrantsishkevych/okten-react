import Post from "./Post";

import {useEffect, useState} from "react";

import './Style-post.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => setPosts(post))
    },[])

    return (
        <div className={'posts'}>
            {posts.map(value => <Post key={value.id} title={value.title} body={value.body}/>)};
        </div>
    );
};

export default Posts;