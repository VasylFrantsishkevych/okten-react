import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from 'react';

import './UsersPageStyle.css'
import {userService} from "../../services/user.servise";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div className={'users'}>
            <div className={'user__name'}>
                <h1>Users</h1>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className={'user__details'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};