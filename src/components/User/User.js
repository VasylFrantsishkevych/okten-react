import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <>
            <Link to={id.toString()} state={user}><h3>{id} -- {name}</h3></Link>
            <Link to={`${id}/albums`}><button>Albums</button></Link>
        </>
    );
};

export default User;