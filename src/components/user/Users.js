import {useEffect, useState} from 'react';

import User from "./User";
import './Style-users.css'
import {getUsers} from "../services/api";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers().then(user => setUsers(user))
    },[])
    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
};

export default Users;