import './Comment.css';

const Comment = (props) => {
    let {name, email, body} = props;

    return (
        <div className={'comment__card'}>
            <h2>name: {name}</h2>
            <h3>email: {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;