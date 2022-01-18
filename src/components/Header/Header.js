import {NavLink} from "react-router-dom";

import './HeaderStyle.css'

const Header = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
        </>
    );
};

export default Header;