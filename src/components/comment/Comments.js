import './Comment.css'

import Comment from "./Comment";

import {useEffect, useState} from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comment => setComments(comment))
    },[])

    return (
        <div className={'comments'}>
            {comments.map( value => <Comment key={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;