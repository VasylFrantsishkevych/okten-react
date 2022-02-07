import {FC, useEffect, useState} from "react";

import './UsersStyle.css';
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

const Users:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const {data} = await userService.getAll();
            setUsers(data)
        }
        getAllUsers()
    }, [])

    return (
        <>
            <h2 className={'users__title'}>Users</h2>
            <div className={'users'}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </>
    );
};

export {Users};