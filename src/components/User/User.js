import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}><h3>{name}</h3></Link>
        </div>
    );
};

export default User;