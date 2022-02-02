import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './CommentsPageStyle.css';
import {getAllComments} from "../../store/commentSlice/commentSlice";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {
    const {comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            <h2 className={'name_comments'}>Comments</h2>
            <div className={'comments__wrap'}>{
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }</div>
        </div>
    );
};

export {CommentsPage};