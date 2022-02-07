import {FC} from "react";

import './PostStyle.css';
import {IPost} from "../../interfaces";

const Post:FC<{post:IPost}> = ({post: {id, userId, title, body}}) => {
    return (
        <div className={'post'}>
            <div>userId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};