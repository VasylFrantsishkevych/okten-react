import {FC, useEffect, useState} from "react";

import './PostStyle.css';
import {IPost} from "../../interfaces";
import {postService} from "../../services";
import {Post} from "../Post/Post";


const Posts:FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    (
        async () => {
            const {data} = await postService.getAll();
            setPosts(data)
        }
    )()
    useEffect(() => {

    }, [])
    return (
        <>
            <h2 className={'posts_title'}>Posts</h2>
            <div className={'posts'}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </>
    );
};

export {Posts};