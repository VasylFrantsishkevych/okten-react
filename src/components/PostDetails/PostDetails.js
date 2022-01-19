import './PostDetailsStyle.css'
import {Link, Outlet} from "react-router-dom";

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <>
            <div>
                <h2 className={'post__id'}>UserId: {userId} - Id: {id}</h2>
                <h3>title: {title}</h3>
                <p>{body}</p>
            </div>
            <div className={'comments__button'}>
                <Link to={`/posts/${id}/comments`}><button>Comments</button></Link>
            </div>
            <Outlet/>
        </>
    );
};

export default PostDetails;