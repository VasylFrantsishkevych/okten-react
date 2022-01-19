import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import PostDetails from "../../components/PostDetails/PostDetails";

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state){
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [state])

    return (
        <>
            {post && <PostDetails post={post}/>}
        </>
    );
};

export {PostDetailsPage};