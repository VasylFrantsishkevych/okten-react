import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './CommentsPostIdPage.css'
import {postService} from "../../services/post.service";
import PostCommentsId from "../../components/PostCommentsId/PostCommentsId";

const CommentsPostIdPage = () => {
    const {id} = useParams();
    const [postId, setPostId] = useState([]);

    useEffect(() => {
        postService.getByPostId(id).then(value => setPostId([...value]))
    },[])

    return (
        <div className={'comments'}>
            {postId.map(comment => <PostCommentsId key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPostIdPage};