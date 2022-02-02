import './CommentStyle.css'

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={'comment__card'}>
            <div className={'comment__card_id'}>
                <h3>PostId: {postId}</h3>
                <h3>Id: {id}</h3>
            </div>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;