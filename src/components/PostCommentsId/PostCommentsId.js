import './PostCommentsIdStyle.css'

const PostCommentsId = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={'comments__card'}>
            <h2>postId: {postId} - id: {id}</h2>
            <h3>name: {name}</h3>
            <h4>email: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostCommentsId;