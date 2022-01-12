import {useEffect, useState} from "react";

import './Comment.css'
import Comment from "./Comment";
import {getComponents} from "../services/api";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect( () => {
        getComponents().then(comment => setComments(comment))
    },[])

    return (
        <div className={'comments'}>
            {comments.map( value => <Comment key={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;