import './PostsStyle.css'

const Post = ({userId,title,body}) => {
    return (
        <div className={'post__card'}>
            <h2>{userId}</h2>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;