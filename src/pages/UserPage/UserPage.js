import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './UserPageStyle.css'
import {User} from "../../components";
import {getAllUsers} from "../../store/userSlice/user.slice";

const UserPage = () => {

    const {users, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {error && <h2>{error}</h2>}
            <h2 className={'name_users'}>Users</h2>
            <div className={'wrap_users'}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export {UserPage};