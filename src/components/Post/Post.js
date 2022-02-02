import './PostStyle.css';

const Post = ({post}) => {
    const {userId, id , title, body} = post;
    return (
        <div className={'post__card'}>
            <div className={'post__card_id'}>
                <h3>UserId: {userId}</h3>
                <h3>Id: {id}</h3>
            </div>
            <h5>title: {title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;