import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllPosts} from "../../store/postSlice/post.slice";
import Post from "../../components/Post/Post";
import './PostPageStyle.css'

const PostPage = () => {
    const {posts} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
            <h2 className={'name_posts'}>Posts</h2>
            <div className={'posts__container'}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export {PostPage};