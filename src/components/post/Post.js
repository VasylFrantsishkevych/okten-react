import './Style-post.css'

const Post = (props) => {
    let {title, body} = props;

    return (
        <div className={'post_card'}>
            <h4>title: {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;