import './PostUserIdStyle.css'

const PostUserId = ({item}) => {
    const {userId, title, body} = item;
    return (
        <div className={'post__card'}>
            <h3>userId: {userId} - title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostUserId;