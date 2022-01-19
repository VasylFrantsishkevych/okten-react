import {Link} from "react-router-dom";

const Post = ({posts}) => {
    const {id, title} = posts;
    return (
        <>
            <Link to={id.toString()} state={posts}><h5>{id} - {title}</h5></Link>
        </>
    );
};

export default Post;