import React, {useEffect, useState} from 'react';

import '../User/UsersStyle.css'
import {userServices} from "../../services/user.service";
import User from "../User/User";

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect( () => {
        userServices.getUsers()
            .then(value => setUsers(value))
    },[]);

    return (
        <div className={'users'}>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Users;